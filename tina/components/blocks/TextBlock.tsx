import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

type TextBlockProps = {
  block: any;
  blockKey: string | number;
  isGrouped?: boolean;
};

export default function TextBlock({
  block,
  blockKey,
  isGrouped = false,
}: TextBlockProps) {
  const blockClassName = block.className || "";
  const BlockTag = isGrouped ? "div" : "section";

  return (
    <BlockTag
      key={blockKey}
      className={`content ${blockClassName}`}
      data-tina-field={tinaField(block, "body")}
    >
      {block.brow && (
        <h3 data-tina-field={tinaField(block, "brow")}>{block.brow}</h3>
      )}
      {block.heading && (
        <h2 data-tina-field={tinaField(block, "heading")}>{block.heading}</h2>
      )}
      <TinaMarkdown content={block.body} />
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
