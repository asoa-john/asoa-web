import { tinaField } from "tinacms/dist/react";

type TestimonialBlockProps = {
  block: any;
  blockKey: string | number;
  isGrouped?: boolean;
};

export default function TestimonialBlock({
  block,
  blockKey,
  isGrouped = false,
}: TestimonialBlockProps) {
  const blockClassName = block.className || "";
  const BlockTag = isGrouped ? "div" : "section";

  return (
    <BlockTag key={blockKey} className={`testimonial ${blockClassName}`}>
      <blockquote data-tina-field={tinaField(block, "quote")}>
        "{block.quote}"
      </blockquote>
      <div className="author">
        {block.photo && <img src={block.photo} alt={block.author} />}
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
