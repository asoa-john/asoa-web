import { tinaField } from "tinacms/dist/react";

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

  // Helper to get alt text with filename fallback
  const getAltText = (img: any) => {
    if (img.alt) return img.alt;
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

  return (
    <BlockTag key={blockKey} className={`gallery ${blockClassName}`}>
      {block.heading && (
        <h2 data-tina-field={tinaField(block, "heading")}>{block.heading}</h2>
      )}
      <div className="gallery-grid">
        {block.images?.map((img: any, imgIndex: number) => (
          <figure key={imgIndex}>
            <img
              src={img.src}
              alt={getAltText(img)}
              style={{ objectPosition: getObjectPosition(img) }}
              data-tina-field={tinaField(img, "src")}
            />
            {img.caption && (
              <figcaption data-tina-field={tinaField(img, "caption")}>
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </BlockTag>
  );
}
