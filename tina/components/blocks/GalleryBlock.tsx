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
              alt={img.alt || ""}
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
