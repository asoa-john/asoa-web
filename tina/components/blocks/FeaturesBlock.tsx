import { tinaField } from "tinacms/dist/react";

type FeaturesBlockProps = {
  block: any;
  blockKey: string | number;
  isGrouped?: boolean;
};

export default function FeaturesBlock({ block, blockKey, isGrouped = false }: FeaturesBlockProps) {
  const blockClassName = block.className || '';
  const BlockTag = isGrouped ? 'div' : 'section';

  return (
    <BlockTag key={blockKey} className={`features ${blockClassName}`}>
      {block.heading && (
        <h2 data-tina-field={tinaField(block, "heading")}>{block.heading}</h2>
      )}
      <div className="features-grid">
        {block.items?.map((item: any, itemIndex: number) => (
          <div key={itemIndex} className="feature-item">
            {item.icon && <img src={item.icon} alt="" />}
            <h3 data-tina-field={tinaField(item, "title")}>{item.title}</h3>
            <p data-tina-field={tinaField(item, "description")}>{item.description}</p>
          </div>
        ))}
      </div>
    </BlockTag>
  );
}
