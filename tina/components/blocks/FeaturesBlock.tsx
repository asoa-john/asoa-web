import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import StyledText from "../../../src/components/react/StyledText";

type FeaturesBlockProps = {
  block: any;
  blockKey: string | number;
  isGrouped?: boolean;
};

export default function FeaturesBlock({
  block,
  blockKey,
  isGrouped = false,
}: FeaturesBlockProps) {
  const blockClassName = block.className || "";
  const BlockTag = isGrouped ? "div" : "section";

  return (
    <BlockTag key={blockKey} className={`features ${blockClassName}`}>
      {block.heading && (
        <h2 data-tina-field={tinaField(block, "heading")}>{block.heading}</h2>
      )}
      <div className="features-grid">
        {block.items?.map((item: any, itemIndex: number) => (
          <div key={itemIndex} className="feature-item">
            {item.icon && (
              <img
                src={item.icon}
                alt=""
                data-tina-field={tinaField(item, "icon")}
              />
            )}
            <h3 data-tina-field={tinaField(item, "title")}>{item.title}</h3>
            <div data-tina-field={tinaField(item, "richText")}>
              <TinaMarkdown content={item.richText} />
            </div>
            <div data-tina-field={tinaField(item, "styledText")}>
              <StyledText text={item.styledText || ""} />
            </div>
          </div>
        ))}
      </div>
    </BlockTag>
  );
}
