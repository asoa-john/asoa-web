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
      className={`text-single ${blockClassName}`}
      data-tina-field={tinaField(block, "body")}
    >
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
      <div data-tina-field={tinaField(block, "body")}>
        <TinaMarkdown content={block.body} />
      </div>
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
