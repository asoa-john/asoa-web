import { tinaField } from "tinacms/dist/react";
import { useState, useEffect } from "react";

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

  const [currentSlide, setCurrentSlide] = useState(0);
  const isSlideshow = block.slideshow === true;
  const slideDuration = (block.slideDuration ?? 5) * 1000; // Convert to milliseconds

  // Helper to get alt text with filename fallback
  const getAltText = (img: any) => {
    if (img.alt) return img.alt;
    if (!img.src) return ""; // Handle null/undefined src
    // Extract filename from path without extension
    const filename =
      img.src
        .split("/")
        .pop()
        ?.replace(/\.[^/.]+$/, "") || "";
    return filename.replace(/-|_/g, " "); // Replace dashes/underscores with spaces
  };

  // Helper to get object-position value
  const getObjectPosition = (img: any) => {
    const x = img.focusX ?? 50;
    const y = img.focusY ?? 50;
    return `${x}% ${y}%`;
  };

  // Slideshow timer
  useEffect(() => {
    if (!isSlideshow || !block.images || block.images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % block.images.length);
    }, slideDuration);

    return () => clearInterval(timer);
  }, [isSlideshow, block.images, slideDuration]);

  return (
    <BlockTag
      key={blockKey}
      className={`gallery ${blockClassName} ${isSlideshow ? "slideshow" : ""}`}
    >
      {block.heading && (
        <h2 data-tina-field={tinaField(block, "heading")}>{block.heading}</h2>
      )}
      <div
        className="gallery-grid"
        data-tina-field={tinaField(block, "images")}
      >
        {block.images?.map((img: any, imgIndex: number) => (
          <figure
            key={imgIndex}
            className={
              isSlideshow && imgIndex === currentSlide ? "current" : ""
            }
          >
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
