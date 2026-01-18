import { tinaField } from "tinacms/dist/react";

type QuoteBlockProps = {
  block: any;
  blockKey: string | number;
  isGrouped?: boolean;
};

export default function QuoteBlock({
  block,
  blockKey,
  isGrouped = false,
}: QuoteBlockProps) {
  const blockClassName = block.className || "";
  const BlockTag = isGrouped ? "div" : "section";

  return (
    <BlockTag key={blockKey} className={`quote ${blockClassName}`}>
      <blockquote data-tina-field={tinaField(block, "quote")}>
        "{block.quote}"
      </blockquote>
      <div className="author">
        {/* {block.photo && <img src={block.photo} alt={block.author} />} */}
        <div>
          <cite data-tina-field={tinaField(block, "author")}>
            {block.author}
          </cite>
          {block.role && (
            <p data-tina-field={tinaField(block, "role")}>{block.role}</p>
          )}
        </div>
      </div>
    </BlockTag>
  );
}
