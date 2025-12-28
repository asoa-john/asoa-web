import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

type ContentBlockProps = {
  block: any;
  blockKey: string | number;
  isGrouped?: boolean;
};

export default function ContentBlock({ block, blockKey, isGrouped = false }: ContentBlockProps) {
  const blockClassName = block.className || '';
  const BlockTag = isGrouped ? 'div' : 'section';

  return (
    <BlockTag 
      key={blockKey} 
      className={`content ${blockClassName}`} 
      data-tina-field={tinaField(block, "body")}
    >
      <TinaMarkdown content={block.body} />
    </BlockTag>
  );
}
