import { tinaField, useTina } from "tinacms/dist/react";
import type { PageQuery, PageQueryVariables } from "../__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import HeroBlock from "../components/blocks/HeroBlock";
import ContentBlock from "../components/blocks/ContentBlock";
import TwoColumnBlock from "../components/blocks/TwoColumnBlock";
import GalleryBlock from "../components/blocks/GalleryBlock";
import FeaturesBlock from "../components/blocks/FeaturesBlock";
import TestimonialBlock from "../components/blocks/TestimonialBlock";
import CtaBlock from "../components/blocks/CtaBlock";
import CustomHtmlBlock from "../components/blocks/CustomHtmlBlock";

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
  // Hero Block
  if (block.__typename === "PageBlocksHero") {
    return <HeroBlock block={block} blockKey={index} isGrouped={isGrouped} />;
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
      <TwoColumnBlock block={block} blockKey={index} isGrouped={isGrouped} />
    );
  }

  // Gallery Block
  if (block.__typename === "PageBlocksGallery") {
    return (
      <GalleryBlock block={block} blockKey={index} isGrouped={isGrouped} />
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
      <TestimonialBlock block={block} blockKey={index} isGrouped={isGrouped} />
    );
  }

  // CTA Block
  if (block.__typename === "PageBlocksCta") {
    return <CtaBlock block={block} blockKey={index} isGrouped={isGrouped} />;
  }

  // Custom HTML Block
  if (block.__typename === "PageBlocksCustomHtml") {
    return (
      <CustomHtmlBlock block={block} blockKey={index} isGrouped={isGrouped} />
    );
  }

  // Fallback for unknown block types
  return <div key={index}>Unknown block type: {block.__typename}</div>;
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
