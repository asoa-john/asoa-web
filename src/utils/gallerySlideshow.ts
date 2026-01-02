export function initSlideshow(
  galleryElement: HTMLElement,
  duration: number = 5000
): () => void {
  const figures = galleryElement.querySelectorAll(".gallery-grid figure");

  if (figures.length <= 1) {
    return () => {}; // No cleanup needed
  }

  let currentIndex = 0;

  // Initialize - show first slide
  figures[0].classList.add("current");

  // Slideshow timer
  const timer = setInterval(() => {
    figures[currentIndex].classList.remove("current");
    currentIndex = (currentIndex + 1) % figures.length;
    figures[currentIndex].classList.add("current");
  }, duration);

  // Return cleanup function
  return () => clearInterval(timer);
}

// Auto-initialize all slideshows on page load (for Astro frontend)
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const slideshows = document.querySelectorAll(".gallery.slideshow");

    slideshows.forEach((gallery) => {
      const duration = parseInt(
        (gallery as HTMLElement).dataset.slideDuration || "5000"
      );
      initSlideshow(gallery as HTMLElement, duration);
    });
  });
}
