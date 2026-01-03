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

  const isSlideshow = block.slideshow === true;
  const slideDuration = (block.slideDuration ?? 5) * 1000;

  // Detect if we're in the Tina visual editor - check for Tina in window
  const [isInEditor, setIsInEditor] = useState(false);

  useEffect(() => {
    // Check if TinaCMS is loaded (it adds window.tinacms or similar)
    setIsInEditor(
      typeof window !== "undefined" &&
        (window.location.search.includes("tina") ||
          document.querySelector("[data-tina-field]") !== null)
    );
  }, []);

  // For editor controls only
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentSlide((prev) => {
      const length = block.images?.length || 1;
      return (prev - 1 + length) % length;
    });
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev + 1) % (block.images?.length || 1));
  };

  return (
    <BlockTag
      key={blockKey}
      className={`gallery ${blockClassName} ${isSlideshow ? "slideshow" : ""}`}
      data-slide-duration={isSlideshow ? slideDuration : undefined}
    >
      {block.heading && (
        <h2 data-tina-field={tinaField(block, "heading")}>{block.heading}</h2>
      )}

      {/* Editor controls - ONLY in visual editor */}
      {isInEditor && isSlideshow && block.images && block.images.length > 1 && (
        <div className="slideshow-editor-controls">
          <button
            type="button"
            onClick={handlePrevSlide}
            className="slideshow-prev"
          >
            ← Previous
          </button>
          <span className="slideshow-counter">
            {currentSlide + 1} / {block.images.length}
          </span>
          <button
            type="button"
            onClick={handleNextSlide}
            className="slideshow-next"
          >
            Next →
          </button>
        </div>
      )}

      <div
        className="gallery-grid"
        data-tina-field={tinaField(block, "images")}
      >
        {block.images?.map((img: any, imgIndex: number) => {
          // First slide should have 'current' class by default
          // In editor, use currentSlide state; on frontend, first slide gets it for no-JS fallback
          const shouldBeCurrent = isInEditor
            ? isSlideshow && imgIndex === currentSlide
            : imgIndex === 0;

          return (
            <figure
              key={imgIndex}
              className={shouldBeCurrent ? "current" : ""}
              data-tina-field={tinaField(block.images[imgIndex])}
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
          );
        })}
      </div>
    </BlockTag>
  );
}
