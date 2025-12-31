import { tinaField } from "tinacms/dist/react";

type HeroBlockProps = {
  block: any;
  blockKey: string | number;
  isGrouped?: boolean;
};

export default function HeroBlock({
  block,
  blockKey,
  isGrouped = false,
}: HeroBlockProps) {
  const blockClassName = block.className || "";
  const BlockTag = isGrouped ? "div" : "section";

  return (
    <BlockTag
      key={blockKey}
      className={`hero ${blockClassName}`}
      data-tina-field={tinaField(block)}
    >
      <h1 data-tina-field={tinaField(block, "headline")}>{block.headline}</h1>
      {block.tagline && (
        <p data-tina-field={tinaField(block, "tagline")}>{block.tagline}</p>
      )}
      {block.image && (
        <img
          src={block.image}
          alt={block.imageAlt || ""}
          data-tina-field={tinaField(block, "image")}
        />
      )}
      {block.cta && (
        <a
          href={block.cta.url}
          className="button"
          data-tina-field={tinaField(block.cta, "text")}
        >
          {block.cta.text}
        </a>
      )}
    </BlockTag>
  );
}
