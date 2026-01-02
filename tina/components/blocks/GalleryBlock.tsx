import { tinaField } from "tinacms/dist/react";
import { useEffect, useRef } from "react";

type GalleryBlockProps = {
  block: any;
  blockKey: string | number;
  isGrouped?: boolean;
};

export default function GalleryBlock({
  block,
  blockKey,
  isGrouped = false,
}: GalleryBlockProps) {
  const blockClassName = block.className || "";
  const BlockTag = isGrouped ? "div" : "section";
  const galleryRef = useRef<HTMLElement>(null);

  const isSlideshow = block.slideshow === true;
  const slideDuration = (block.slideDuration ?? 5) * 1000;

  // Helper to get alt text with filename fallback
  const getAltText = (img: any) => {
    if (img.alt) return img.alt;
    if (!img.src) return "";
    const filename =
      img.src
        .split("/")
        .pop()
        ?.replace(/\.[^/.]+$/, "") || "";
    return filename.replace(/-|_/g, " ");
  };

  // Helper to get object-position value
  const getObjectPosition = (img: any) => {
    const x = img.focusX ?? 50;
    const y = img.focusY ?? 50;
    return `${x}% ${y}%`;
  };

  // Slideshow logic using vanilla JS (same as frontend)
  useEffect(() => {
    if (!isSlideshow || !galleryRef.current) return;

    const figures = galleryRef.current.querySelectorAll(".gallery-grid figure");
    if (figures.length <= 1) return;

    let currentIndex = 0;
    figures[0].classList.add("current");

    const timer = setInterval(() => {
      figures[currentIndex].classList.remove("current");
      currentIndex = (currentIndex + 1) % figures.length;
      figures[currentIndex].classList.add("current");
    }, slideDuration);

    return () => clearInterval(timer);
  }, [isSlideshow, block.images, slideDuration]);

  return (
    <BlockTag
      ref={galleryRef as any}
      key={blockKey}
      className={`gallery ${blockClassName} ${isSlideshow ? "slideshow" : ""}`}
      data-slide-duration={isSlideshow ? slideDuration : undefined}
    >
      {block.heading && (
        <h2 data-tina-field={tinaField(block, "heading")}>{block.heading}</h2>
      )}
      <div
        className="gallery-grid"
        data-tina-field={tinaField(block, "images")}
      >
        {block.images?.map((img: any, imgIndex: number) => (
          <figure key={imgIndex}>
            {img.src && (
              <img
                src={img.src}
                alt={getAltText(img)}
                style={{ objectPosition: getObjectPosition(img) }}
              />
            )}
            {img.caption && <figcaption>{img.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </BlockTag>
  );
}
