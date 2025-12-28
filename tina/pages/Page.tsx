import { tinaField, useTina } from "tinacms/dist/react";
import type { PageQuery, PageQueryVariables } from "../__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import ContentBlock from "../components/blocks/ContentBlock";
import FeaturesBlock from "../components/blocks/FeaturesBlock";

type Props = {
  variables: PageQueryVariables;
  data: PageQuery;
  query: string;
};

// Helper function to group blocks based on groupWithNext
function groupBlocks(blocks: any[]) {
  const groups: any[][] = [];
  let currentGroup: any[] = [];

  blocks.forEach((block, index) => {
    currentGroup.push(block);

    // Check if this block should group with the next one
    const shouldGroupWithNext = block.section?.groupWithNext === true;

    // If it shouldn't group with next, or it's the last block, close the group
    if (!shouldGroupWithNext || index === blocks.length - 1) {
      groups.push(currentGroup);
      currentGroup = [];
    }
  });

  return groups;
}

// Helper function to render a single block
function renderBlock(block: any, index: number, isGrouped = false) {
  // Build block className
  const blockClassName = block.className || "";

  // Use <section> for ungrouped blocks, <div> for grouped blocks
  const BlockTag = isGrouped ? "div" : "section";

  // Hero Block
  if (block.__typename === "PageBlocksHero") {
    return (
      <BlockTag
        key={index}
        className={`hero ${blockClassName}`}
        data-tina-field={tinaField(block)}
      >
        <h1 data-tina-field={tinaField(block, "headline")}>{block.headline}</h1>
        {block.tagline && (
          <p data-tina-field={tinaField(block, "tagline")}>{block.tagline}</p>
        )}
        {block.image && (
          <img
            src={block.image}
            alt={block.imageAlt || ""}
            data-tina-field={tinaField(block, "image")}
          />
        )}
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

  // Content Block
  if (block.__typename === "PageBlocksContent") {
    return (
      <ContentBlock block={block} blockKey={index} isGrouped={isGrouped} />
    );
  }

  // Two Column Block
  if (block.__typename === "PageBlocksTwoColumn") {
    return (
      <BlockTag key={index} className={`two-column ${blockClassName}`}>
        <div data-tina-field={tinaField(block, "leftColumn")}>
          <TinaMarkdown content={block.leftColumn} />
        </div>
        <div data-tina-field={tinaField(block, "rightColumn")}>
          <TinaMarkdown content={block.rightColumn} />
        </div>
      </BlockTag>
    );
  }

  // Gallery Block
  if (block.__typename === "PageBlocksGallery") {
    return (
      <BlockTag key={index} className={`gallery ${blockClassName}`}>
        {block.heading && (
          <h2 data-tina-field={tinaField(block, "heading")}>{block.heading}</h2>
        )}
        <div className="gallery-grid">
          {block.images?.map((img: any, imgIndex: number) => (
            <figure key={imgIndex}>
              <img
                src={img.src}
                alt={img.alt || ""}
                data-tina-field={tinaField(img, "src")}
              />
              {img.caption && (
                <figcaption data-tina-field={tinaField(img, "caption")}>
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </BlockTag>
    );
  }

  // Features Block
  if (block.__typename === "PageBlocksFeatures") {
    return (
      <FeaturesBlock block={block} blockKey={index} isGrouped={isGrouped} />
    );
  }

  // Testimonial Block
  if (block.__typename === "PageBlocksTestimonial") {
    return (
      <BlockTag key={index} className={`testimonial ${blockClassName}`}>
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

  // CTA Block
  if (block.__typename === "PageBlocksCta") {
    return (
      <BlockTag key={index} className={`cta ${blockClassName}`}>
        <h2 data-tina-field={tinaField(block, "heading")}>{block.heading}</h2>
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

  // Fallback for unknown block types
  return (
    <BlockTag key={index}>Unknown block type: {block.__typename}</BlockTag>
  );
}

const TinaPage = (props: Props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const page = data.page;

  if (!page.blocks || page.blocks.length === 0) {
    return (
      <main>
        <div data-tina-field={tinaField(page, "body")}>
          <TinaMarkdown content={page.body} />
        </div>
      </main>
    );
  }

  // Group blocks based on groupWithNext toggle
  const blockGroups = groupBlocks(page.blocks);

  return (
    <main>
      {blockGroups.map((group, groupIndex) => {
        // If group has only one block, render it as a <section>
        if (group.length === 1) {
          return renderBlock(group[0], groupIndex, false);
        }

        // Multiple blocks in group - wrap them in a section
        // Individual blocks inside use <div>
        const firstBlock = group[0];
        const section = firstBlock.section || {};

        // Build group className using groupClassName from first block
        const classNames = ["section-wrapper"];
        if (section.groupClassName) classNames.push(section.groupClassName);
        if (section.backgroundColor)
          classNames.push(`bg-${section.backgroundColor}`);
        if (section.paddingSize)
          classNames.push(`padding-${section.paddingSize}`);
        if (section.maxWidth) classNames.push(`max-width-${section.maxWidth}`);

        // Build inline styles
        const styles: React.CSSProperties = {};
        if (section.backgroundImage) {
          styles.backgroundImage = `url(${section.backgroundImage})`;
          styles.backgroundSize = "cover";
          styles.backgroundPosition = "center";
        }

        return (
          <section
            key={groupIndex}
            className={classNames.join(" ")}
            style={styles}
            data-tina-field={tinaField(firstBlock, "section")}
          >
            {group.map((block, blockIndex) =>
              renderBlock(block, `${groupIndex}-${blockIndex}`, true)
            )}
          </section>
        );
      })}
    </main>
  );
};

export default TinaPage;
