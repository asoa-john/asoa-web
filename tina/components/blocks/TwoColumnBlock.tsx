import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

type TwoColumnBlockProps = {
  block: any;
  blockKey: string | number;
  isGrouped?: boolean;
};

export default function TwoColumnBlock({
  block,
  blockKey,
  isGrouped = false,
}: TwoColumnBlockProps) {
  const blockClassName = block.className || "";
  const BlockTag = isGrouped ? "div" : "section";

  return (
    <BlockTag key={blockKey} className={`two-column ${blockClassName}`}>
      <div data-tina-field={tinaField(block, "leftColumn")}>
        <TinaMarkdown content={block.leftColumn} />
      </div>
      <div data-tina-field={tinaField(block, "rightColumn")}>
        <TinaMarkdown content={block.rightColumn} />
      </div>
    </BlockTag>
  );
}
