import { tinaField } from "tinacms/dist/react";

type CustomHtmlBlockProps = {
  block: any;
  blockKey: string | number;
  isGrouped?: boolean;
};

export default function CustomHtmlBlock({
  block,
  blockKey,
  isGrouped = false,
}: CustomHtmlBlockProps) {
  const blockClassName = block.className || "";
  const BlockTag = isGrouped ? "div" : "section";

  return (
    <BlockTag
      key={blockKey}
      className={`custom-html ${blockClassName}`}
      data-tina-field={tinaField(block, "html")}
      dangerouslySetInnerHTML={{ __html: block.html || "" }}
    />
  );
}
