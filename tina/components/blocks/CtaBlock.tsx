import { tinaField } from "tinacms/dist/react";

type CtaBlockProps = {
  block: any;
  blockKey: string | number;
  isGrouped?: boolean;
};

export default function CtaBlock({
  block,
  blockKey,
  isGrouped = false,
}: CtaBlockProps) {
  const blockClassName = block.className || "";
  const BlockTag = isGrouped ? "div" : "section";

  return (
    <BlockTag key={blockKey} className={`cta ${blockClassName}`}>
      {block.brow && (
        <h3 className="block-brow" data-tina-field={tinaField(block, "brow")}>
          {block.brow}
        </h3>
      )}
      {block.heading && (
        <h2
          className="block-heading"
          data-tina-field={tinaField(block, "heading")}
        >
          {block.heading}
        </h2>
      )}
      {block.description && (
        <p data-tina-field={tinaField(block, "description")}>
          {block.description}
        </p>
      )}
      <a
        href={block.buttonUrl}
        className="button"
        data-tina-field={tinaField(block, "buttonText")}
      >
        {block.buttonText}
      </a>
    </BlockTag>
  );
}
