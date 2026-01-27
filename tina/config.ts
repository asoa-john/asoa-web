import { defineConfig } from "tinacms";
import IconComponent from "./components/IconComponent";
import { PiCoinsBold } from "react-icons/pi";

// Helper: Block styling fields
const blockStylingFields = {
  type: "string",
  name: "className",
  label: "CSS Classes",
  description: "CSS classes applied to this block",
};

// Helper: Section styling fields that every block can use
const sectionStylingFields = {
  type: "object",
  name: "section",
  label: "Section Styling",
  fields: [
    {
      type: "boolean",
      name: "groupWithNext",
      label: "Group with Next Block",
      description:
        "Wrap this block with the following block(s) in a section container",
    },
    {
      type: "string",
      name: "groupClassName",
      label: "Group CSS Classes",
      description:
        "CSS classes for the group wrapper (only used if this is the first block in a group)",
    },
    {
      type: "string",
      name: "backgroundColor",
      label: "Background Color",
      options: [
        "",
        "white",
        "gray",
        "light-gray",
        "dark",
        "primary",
        "secondary",
      ],
    },
    {
      type: "image",
      name: "backgroundImage",
      label: "Background Image",
    },
    {
      type: "string",
      name: "backgroundVideoUrl",
      label: "Background Video URL",
      description:
        "URL to video file (MP4 recommended). Will autoplay muted in background.",
    },
    {
      type: "boolean",
      name: "videoLoop",
      label: "Loop Video",
      description: "Loop the background video continuously",
    },
    {
      type: "string",
      name: "paddingSize",
      label: "Padding Size",
      options: ["", "none", "small", "medium", "large", "xlarge"],
    },
    {
      type: "string",
      name: "maxWidth",
      label: "Max Width",
      options: ["", "narrow", "medium", "wide", "full"],
    },
  ],
};

// Your TinaCMS schema configuration
export default defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.TINA_CLIENT_ID || "local",
  token: process.env.TINA_TOKEN || "local",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  cmsCallback: (cms) => {
    if (!document.getElementById("tina-custom-styles-link")) {
      const link = document.createElement("link");
      link.id = "tina-custom-styles-link";
      link.rel = "stylesheet";
      link.href = "/tina/editor-styles.css"; // file in your public folder
      document.head.appendChild(link);
    }
    return cms;
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
      static: false,
    },
  },

  schema: {
    collections: [
      // PAGES COLLECTION - With block-based editing
      {
        name: "page",
        label: "Pages",
        path: "src/content/page",
        format: "mdx",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return `/`;
            }
            return `/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Meta Description",
          },
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Page Sections",
            ui: {
              visualSelector: true,
            },
            templates: [
              // Hero Block
              {
                name: "hero",
                label: "Hero",
                ui: {
                  itemProps: (item) => {
                    return {
                      label: item?.headline ? `Hero: ${item.headline}` : "Hero",
                    };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "headline",
                    label: "Headline",
                  },
                  {
                    type: "string",
                    name: "tagline",
                    label: "Tagline",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Hero Image",
                  },
                  {
                    type: "string",
                    name: "imageAlt",
                    label: "Image Alt Text",
                  },
                  {
                    type: "object",
                    name: "cta",
                    label: "Call to Action",
                    fields: [
                      {
                        type: "string",
                        name: "text",
                        label: "Button Text",
                      },
                      {
                        type: "string",
                        name: "url",
                        label: "Button URL",
                      },
                    ],
                  },
                  blockStylingFields,
                  sectionStylingFields,
                ],
              },
              // Text Block
              {
                name: "text",
                label: "Text",
                ui: {
                  itemProps: (item) => {
                    return {
                      label: item?.headline ? `Text: ${item.headline}` : "Text",
                    };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "brow",
                    label: "Brow",
                  },
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                  },
                  {
                    type: "rich-text",
                    name: "body",
                    label: "Content",
                    isBody: true,
                  },
                  {
                    type: "object",
                    name: "cta",
                    label: "Call to Action",
                    fields: [
                      {
                        type: "string",
                        name: "text",
                        label: "Button Text",
                      },
                      {
                        type: "string",
                        name: "url",
                        label: "Button URL",
                      },
                    ],
                  },
                  blockStylingFields,
                  sectionStylingFields,
                ],
              },
              // Text/Image Block
              {
                name: "textImage",
                label: "Text/Image",
                ui: {
                  itemProps: (item) => {
                    return {
                      label: item?.headline
                        ? `Text/Image: ${item.headline}`
                        : "Text/Image",
                    };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "brow",
                    label: "Brow",
                  },
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Hero Image",
                  },
                  {
                    type: "string",
                    name: "imageAlt",
                    label: "Image Alt Text",
                  },
                  {
                    type: "rich-text",
                    name: "body",
                    label: "Right Column",
                  },
                  {
                    type: "object",
                    name: "cta",
                    label: "Call to Action",
                    fields: [
                      {
                        type: "string",
                        name: "text",
                        label: "Button Text",
                      },
                      {
                        type: "string",
                        name: "url",
                        label: "Button URL",
                      },
                    ],
                  },
                  blockStylingFields,
                  sectionStylingFields,
                ],
              },
              // Image Gallery Block
              {
                name: "gallery",
                label: "Gallery",
                ui: {
                  itemProps: (item) => {
                    return {
                      label: item?.heading
                        ? `Gallery: ${item.heading}`
                        : "Gallery",
                    };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                  },
                  {
                    type: "boolean",
                    name: "slideshow",
                    label: "Enable Slideshow",
                    description:
                      "Turn this gallery into an auto-playing slideshow",
                  },
                  {
                    type: "number",
                    name: "slideDuration",
                    label: "Slide Duration (seconds)",
                    description:
                      "How long each slide displays (only applies if slideshow is enabled)",
                    ui: {
                      component: "number",
                      step: 1,
                      parse: (val) => Number(val),
                      format: (val) =>
                        val === null || val === undefined ? 5 : val,
                    },
                  },
                  {
                    type: "object",
                    list: true,
                    name: "images",
                    label: "Images",
                    fields: [
                      {
                        type: "image",
                        name: "src",
                        label: "Image",
                      },
                      {
                        type: "string",
                        name: "alt",
                        label: "Alt Text (optional)",
                        description:
                          "Describe the image for accessibility. If empty, filename will be used.",
                      },
                      {
                        type: "string",
                        name: "caption",
                        label: "Caption",
                      },
                      {
                        type: "number",
                        name: "focusX",
                        label: "Focus Point X (%)",
                        description:
                          "Horizontal focus point (0-100%). Default is 50%.",
                        ui: {
                          component: "number",
                          step: 1,
                          parse: (val) => Number(val),
                          format: (val) =>
                            val === null || val === undefined ? 50 : val,
                        },
                      },
                      {
                        type: "number",
                        name: "focusY",
                        label: "Focus Point Y (%)",
                        description:
                          "Vertical focus point (0-100%). Default is 50%.",
                        ui: {
                          component: "number",
                          step: 1,
                          parse: (val) => Number(val),
                          format: (val) =>
                            val === null || val === undefined ? 50 : val,
                        },
                      },
                    ],
                  },
                  blockStylingFields,
                  sectionStylingFields,
                ],
              },
              // Features Block
              {
                name: "features",
                label: "Features",
                ui: {
                  itemProps: (item) => {
                    return {
                      label: item?.heading
                        ? `Features: ${item.heading}`
                        : "Features",
                    };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "heading",
                    label: "Section Heading",
                  },
                  {
                    type: "object",
                    list: true,
                    name: "items",
                    label: "Feature Items",
                    fields: [
                      {
                        type: "string",
                        name: "brow",
                        label: "Brow",
                      },
                      {
                        type: "string",
                        name: "title",
                        label: "Feature Title",
                      },
                      {
                        type: "image",
                        name: "icon",
                        label: "Icon/Image",
                      },
                      {
                        type: "rich-text",
                        name: "richText",
                        label: "Rich Text",
                        isBody: true,
                      },
                      {
                        type: "string",
                        name: "styledText",
                        label: "Styled Text",
                        ui: {
                          component: "textarea",
                        },
                        description:
                          "Use [.class#id@tabindex]text[] syntax. Example: [#main.pb-8]Hello[] [.highlight]world[]",
                      },
                    ],
                  },
                  blockStylingFields,
                  sectionStylingFields,
                ],
              },
              // Quote Block
              {
                name: "quote",
                label: "Quote",
                ui: {
                  itemProps: (item) => {
                    return {
                      label: item?.author ? `Quote: ${item.author}` : "Quote",
                    };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "quote",
                    label: "Quote",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "author",
                    label: "Author Name",
                  },
                  {
                    type: "string",
                    name: "role",
                    label: "Author Role/Title",
                  },
                  {
                    type: "image",
                    name: "photo",
                    label: "Author Photo",
                  },
                  blockStylingFields,
                  sectionStylingFields,
                ],
              },
              // Call to Action Block
              {
                name: "cta",
                label: "Call to Action",
                ui: {
                  itemProps: (item) => {
                    return {
                      label: item?.heading
                        ? `CTA: ${item.heading}`
                        : "Call to Action",
                    };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "brow",
                    label: "Brow",
                  },
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "buttonText",
                    label: "Button Text",
                  },
                  {
                    type: "string",
                    name: "buttonUrl",
                    label: "Button URL",
                  },
                  {
                    type: "object",
                    name: "cta",
                    label: "Call to Action",
                    fields: [
                      {
                        type: "string",
                        name: "text",
                        label: "Button Text",
                      },
                      {
                        type: "string",
                        name: "url",
                        label: "Button URL",
                      },
                    ],
                  },
                  blockStylingFields,
                  sectionStylingFields,
                ],
              },
              // FAQ Block
              {
                name: "faq",
                label: "FAQ",
                ui: {
                  itemProps: (item) => {
                    return {
                      label: item?.heading ? `FAQ: ${item.heading}` : "FAQ",
                    };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "brow",
                    label: "Brow",
                  },
                  {
                    type: "string",
                    name: "heading",
                    label: "Section Heading",
                  },
                  {
                    type: "object",
                    list: true,
                    name: "items",
                    label: "FAQ Items",
                    ui: {
                      itemProps: (item) => {
                        return {
                          label: item?.question || "New FAQ",
                        };
                      },
                    },
                    fields: [
                      {
                        type: "string",
                        name: "question",
                        label: "Question",
                        required: true,
                      },
                      {
                        type: "rich-text",
                        name: "answer",
                        label: "Answer",
                        isBody: true,
                      },
                    ],
                  },
                  blockStylingFields,
                  sectionStylingFields,
                ],
              },
              // Custom HTML Block
              {
                name: "html",
                label: "Custom HTML",
                ui: {
                  itemProps: (item) => {
                    return {
                      label: item?.label
                        ? `HTML: ${item.label}`
                        : "Custom HTML",
                    };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "label",
                    label: "Label (for organization)",
                    description:
                      "Give this HTML block a name to identify it in the editor",
                  },
                  {
                    type: "string",
                    name: "html",
                    label: "HTML Code",
                    ui: {
                      component: "textarea",
                    },
                    description:
                      "⚠️ Use with caution. This will render raw HTML on your page.",
                  },
                  blockStylingFields,
                  sectionStylingFields,
                ],
              },
              // StyledText
              {
                name: "styledText",
                label: "Styled Text",
                ui: {
                  itemProps: (item) => {
                    // Show first 50 chars in the list
                    const preview =
                      item?.text?.substring(0, 50) || "Styled Text";
                    return { label: `Styled Text: ${preview}...` };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Styled Text",
                    ui: {
                      component: "textarea",
                    },
                    description:
                      "Use [.class#id@tabindex]text[] syntax. Example: [#main.pb-8]Hello[] [.highlight]world[]",
                    required: true,
                  },
                  blockStylingFields,
                  sectionStylingFields,
                ],
              },
            ],
          },
        ],
      },

      // BLOG COLLECTION - With hero image
      {
        name: "blog",
        label: "Blog Posts",
        path: "src/content/blog",
        format: "mdx",
        ui: {
          router: ({ document }) => {
            return `/blog/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Publication Date",
            required: true,
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
          },
          {
            type: "string",
            name: "heroImageAlt",
            label: "Hero Image Alt Text",
          },
          {
            type: "string",
            name: "author",
            label: "Author",
          },
          {
            type: "string",
            list: true,
            name: "tags",
            label: "Tags",
            ui: {
              component: "tags",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Blog Post Body",
            isBody: true,
            templates: [
              {
                name: "ImageWithCaption",
                label: "Image with Caption",
                fields: [
                  {
                    type: "image",
                    name: "src",
                    label: "Image",
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Alt Text",
                  },
                  {
                    type: "string",
                    name: "caption",
                    label: "Caption",
                  },
                ],
              },
            ],
          },
        ],
      },

      // CONFIG COLLECTION - For site-wide settings
      {
        name: "config",
        label: "Site Configuration",
        path: "src/content/config",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "image",
            name: "siteLogo",
            label: "Site Logo",
          },
          {
            type: "string",
            name: "siteTitle",
            label: "Site Title",
          },
          {
            type: "string",
            name: "siteTagline",
            label: "Site Tagline",
          },
          {
            type: "string",
            name: "siteDescription",
            label: "Site Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "navigation",
            label: "Navigation",
            list: true,
            ui: {
              itemProps: (item) => {
                return {
                  label: item?.title || "Navigation Item",
                };
              },
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Label",
              },
              {
                type: "string",
                name: "link",
                label: "URL",
              },
              {
                type: "string",
                name: "classes",
                label: "CSS Classes",
              },
            ],
          },
          {
            type: "object",
            name: "social",
            label: "Social Media Links",
            list: true,
            ui: {
              itemProps: (item) => {
                return {
                  label: item?.title || "Link",
                };
              },
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Label",
              },
              {
                type: "string",
                name: "link",
                label: "URL",
              },
              {
                type: "string",
                name: "classes",
                label: "CSS Classes",
              },
              {
                type: "string",
                name: "icon",
                label: "Icon",
                ui: {
                  //@ts-ignore
                  component: IconComponent,
                },
              },
            ],
          },
        ],
      },
    ],
  },
});
