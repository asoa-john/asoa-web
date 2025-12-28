import { tinaField, useTina } from "tinacms/dist/react";
import type { PageQuery, PageQueryVariables } from "../__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

type Props = {
  variables: PageQueryVariables;
  data: PageQuery;
  query: string;
};

const TinaPage = (props: Props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const page = data.page;

  return (
    <main>
      {/* Render blocks if they exist */}
      {page.blocks && page.blocks.length > 0 ? (
        <div data-tina-field={tinaField(page, "blocks")}>
          {page.blocks.map((block: any, index: number) => {
            // Hero Block
            if (block.__typename === "PageBlocksHero") {
              return (
                <section
                  key={index}
                  className="hero"
                  data-tina-field={tinaField(block)}
                >
                  <h1 data-tina-field={tinaField(block, "headline")}>
                    {block.headline}
                  </h1>
                  {block.tagline && (
                    <p data-tina-field={tinaField(block, "tagline")}>
                      {block.tagline}
                    </p>
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
                </section>
              );
            }

            // Content Block
            if (block.__typename === "PageBlocksContent") {
              return (
                <section
                  key={index}
                  className="content"
                  data-tina-field={tinaField(block, "body")}
                >
                  <TinaMarkdown content={block.body} />
                </section>
              );
            }

            // Two Column Block
            if (block.__typename === "PageBlocksTwoColumn") {
              return (
                <section key={index} className="two-column">
                  <div data-tina-field={tinaField(block, "leftColumn")}>
                    <TinaMarkdown content={block.leftColumn} />
                  </div>
                  <div data-tina-field={tinaField(block, "rightColumn")}>
                    <TinaMarkdown content={block.rightColumn} />
                  </div>
                </section>
              );
            }

            // Gallery Block
            if (block.__typename === "PageBlocksGallery") {
              return (
                <section key={index} className="gallery">
                  {block.heading && (
                    <h2 data-tina-field={tinaField(block, "heading")}>
                      {block.heading}
                    </h2>
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
                          <figcaption
                            data-tina-field={tinaField(img, "caption")}
                          >
                            {img.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                </section>
              );
            }

            // Features Block
            if (block.__typename === "PageBlocksFeatures") {
              return (
                <section key={index} className="features">
                  {block.heading && (
                    <h2 data-tina-field={tinaField(block, "heading")}>
                      {block.heading}
                    </h2>
                  )}
                  <div className="features-grid">
                    {block.items?.map((item: any, itemIndex: number) => (
                      <div key={itemIndex} className="feature-item">
                        {item.icon && <img src={item.icon} alt="" />}
                        <h3 data-tina-field={tinaField(item, "title")}>
                          {item.title}
                        </h3>
                        <p data-tina-field={tinaField(item, "description")}>
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              );
            }

            // Testimonial Block
            if (block.__typename === "PageBlocksTestimonial") {
              return (
                <section key={index} className="testimonial">
                  <blockquote data-tina-field={tinaField(block, "quote")}>
                    "{block.quote}"
                  </blockquote>
                  <div className="author">
                    {block.photo && (
                      <img src={block.photo} alt={block.author} />
                    )}
                    <div>
                      <cite data-tina-field={tinaField(block, "author")}>
                        {block.author}
                      </cite>
                      {block.role && (
                        <p data-tina-field={tinaField(block, "role")}>
                          {block.role}
                        </p>
                      )}
                    </div>
                  </div>
                </section>
              );
            }

            // CTA Block
            if (block.__typename === "PageBlocksCta") {
              return (
                <section key={index} className="cta">
                  <h2 data-tina-field={tinaField(block, "heading")}>
                    {block.heading}
                  </h2>
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
                </section>
              );
            }

            // Section Container Block
            if (block.__typename === "PageBlocksSection") {
              return (
                <section
                  key={index}
                  className={`section-container bg-${block.backgroundColor} padding-${block.paddingSize} max-width-${block.maxWidth}`}
                  data-tina-field={tinaField(block)}
                >
                  <div className="section-inner">
                    {block.content?.map(
                      (innerBlock: any, innerIndex: number) => {
                        // Recursively render the same block types inside the section
                        // (You could extract this into a separate function to avoid duplication)

                        if (
                          innerBlock.__typename ===
                          "PageBlocksSectionContentHero"
                        ) {
                          return (
                            <div key={innerIndex} className="hero">
                              <h1
                                data-tina-field={tinaField(
                                  innerBlock,
                                  "headline"
                                )}
                              >
                                {innerBlock.headline}
                              </h1>
                              {innerBlock.tagline && (
                                <p
                                  data-tina-field={tinaField(
                                    innerBlock,
                                    "tagline"
                                  )}
                                >
                                  {innerBlock.tagline}
                                </p>
                              )}
                              {innerBlock.image && (
                                <img
                                  src={innerBlock.image}
                                  alt={innerBlock.imageAlt || ""}
                                  data-tina-field={tinaField(
                                    innerBlock,
                                    "image"
                                  )}
                                />
                              )}
                              {innerBlock.cta && (
                                <a
                                  href={innerBlock.cta.url}
                                  className="button"
                                  data-tina-field={tinaField(
                                    innerBlock.cta,
                                    "text"
                                  )}
                                >
                                  {innerBlock.cta.text}
                                </a>
                              )}
                            </div>
                          );
                        }

                        if (
                          innerBlock.__typename ===
                          "PageBlocksSectionContentContent"
                        ) {
                          return (
                            <div
                              key={innerIndex}
                              className="content"
                              data-tina-field={tinaField(innerBlock, "body")}
                            >
                              <TinaMarkdown content={innerBlock.body} />
                            </div>
                          );
                        }

                        if (
                          innerBlock.__typename ===
                          "PageBlocksSectionContentTwoColumn"
                        ) {
                          return (
                            <div key={innerIndex} className="two-column">
                              <div
                                data-tina-field={tinaField(
                                  innerBlock,
                                  "leftColumn"
                                )}
                              >
                                <TinaMarkdown content={innerBlock.leftColumn} />
                              </div>
                              <div
                                data-tina-field={tinaField(
                                  innerBlock,
                                  "rightColumn"
                                )}
                              >
                                <TinaMarkdown
                                  content={innerBlock.rightColumn}
                                />
                              </div>
                            </div>
                          );
                        }

                        if (
                          innerBlock.__typename ===
                          "PageBlocksSectionContentGallery"
                        ) {
                          return (
                            <div key={innerIndex} className="gallery">
                              {innerBlock.heading && (
                                <h2
                                  data-tina-field={tinaField(
                                    innerBlock,
                                    "heading"
                                  )}
                                >
                                  {innerBlock.heading}
                                </h2>
                              )}
                              <div className="gallery-grid">
                                {innerBlock.images?.map(
                                  (img: any, imgIndex: number) => (
                                    <figure key={imgIndex}>
                                      <img
                                        src={img.src}
                                        alt={img.alt || ""}
                                        data-tina-field={tinaField(img, "src")}
                                      />
                                      {img.caption && (
                                        <figcaption
                                          data-tina-field={tinaField(
                                            img,
                                            "caption"
                                          )}
                                        >
                                          {img.caption}
                                        </figcaption>
                                      )}
                                    </figure>
                                  )
                                )}
                              </div>
                            </div>
                          );
                        }

                        if (
                          innerBlock.__typename ===
                          "PageBlocksSectionContentFeatures"
                        ) {
                          return (
                            <div key={innerIndex} className="features">
                              {innerBlock.heading && (
                                <h2
                                  data-tina-field={tinaField(
                                    innerBlock,
                                    "heading"
                                  )}
                                >
                                  {innerBlock.heading}
                                </h2>
                              )}
                              <div className="features-grid">
                                {innerBlock.items?.map(
                                  (item: any, itemIndex: number) => (
                                    <div
                                      key={itemIndex}
                                      className="feature-item"
                                    >
                                      {item.icon && (
                                        <img src={item.icon} alt="" />
                                      )}
                                      <h3
                                        data-tina-field={tinaField(
                                          item,
                                          "title"
                                        )}
                                      >
                                        {item.title}
                                      </h3>
                                      <p
                                        data-tina-field={tinaField(
                                          item,
                                          "description"
                                        )}
                                      >
                                        {item.description}
                                      </p>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          );
                        }

                        if (
                          innerBlock.__typename ===
                          "PageBlocksSectionContentTestimonial"
                        ) {
                          return (
                            <div key={innerIndex} className="testimonial">
                              <blockquote
                                data-tina-field={tinaField(innerBlock, "quote")}
                              >
                                "{innerBlock.quote}"
                              </blockquote>
                              <div className="author">
                                {innerBlock.photo && (
                                  <img
                                    src={innerBlock.photo}
                                    alt={innerBlock.author}
                                  />
                                )}
                                <div>
                                  <cite
                                    data-tina-field={tinaField(
                                      innerBlock,
                                      "author"
                                    )}
                                  >
                                    {innerBlock.author}
                                  </cite>
                                  {innerBlock.role && (
                                    <p
                                      data-tina-field={tinaField(
                                        innerBlock,
                                        "role"
                                      )}
                                    >
                                      {innerBlock.role}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        }

                        if (
                          innerBlock.__typename ===
                          "PageBlocksSectionContentCta"
                        ) {
                          return (
                            <div key={innerIndex} className="cta">
                              <h2
                                data-tina-field={tinaField(
                                  innerBlock,
                                  "heading"
                                )}
                              >
                                {innerBlock.heading}
                              </h2>
                              {innerBlock.description && (
                                <p
                                  data-tina-field={tinaField(
                                    innerBlock,
                                    "description"
                                  )}
                                >
                                  {innerBlock.description}
                                </p>
                              )}
                              <a
                                href={innerBlock.buttonUrl}
                                className="button"
                                data-tina-field={tinaField(
                                  innerBlock,
                                  "buttonText"
                                )}
                              >
                                {innerBlock.buttonText}
                              </a>
                            </div>
                          );
                        }

                        return (
                          <div key={innerIndex}>
                            Unknown inner block: {innerBlock.__typename}
                          </div>
                        );
                      }
                    )}
                  </div>
                </section>
              );
            }

            // Fallback for unknown block types
            return (
              <div key={index}>Unknown block type: {block.__typename}</div>
            );
          })}
        </div>
      ) : (
        // Fallback for old content with just body field
        <div data-tina-field={tinaField(page, "body")}>
          <TinaMarkdown content={page.body} />
        </div>
      )}
    </main>
  );
};

export default TinaPage;
