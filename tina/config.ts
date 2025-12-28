import { defineConfig } from "tinacms";

// Your TinaCMS schema configuration
export default defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // PAGES COLLECTION - With nested block-based editing
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
                label: "Hero Section",
                ui: {
                  itemProps: (item) => {
                    return {
                      label: item?.headline
                        ? `Hero: ${item.headline}`
                        : "Hero Section",
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
                ],
              },
              // Content Block
              {
                name: "content",
                label: "Content Block",
                fields: [
                  {
                    type: "rich-text",
                    name: "body",
                    label: "Content",
                    isBody: true,
                  },
                ],
              },
              // Two Column Block
              {
                name: "twoColumn",
                label: "Two Column Layout",
                fields: [
                  {
                    type: "rich-text",
                    name: "leftColumn",
                    label: "Left Column",
                  },
                  {
                    type: "rich-text",
                    name: "rightColumn",
                    label: "Right Column",
                  },
                ],
              },
              // Image Gallery Block
              {
                name: "gallery",
                label: "Image Gallery",
                ui: {
                  itemProps: (item) => {
                    return {
                      label: item?.heading
                        ? `Gallery: ${item.heading}`
                        : "Image Gallery",
                    };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "heading",
                    label: "Gallery Heading",
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
              // Features Block
              {
                name: "features",
                label: "Features Section",
                ui: {
                  itemProps: (item) => {
                    return {
                      label: item?.heading
                        ? `Features: ${item.heading}`
                        : "Features Section",
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
                        name: "title",
                        label: "Feature Title",
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
                        type: "image",
                        name: "icon",
                        label: "Icon/Image",
                      },
                    ],
                  },
                ],
              },
              // Testimonial Block
              {
                name: "testimonial",
                label: "Testimonial",
                ui: {
                  itemProps: (item) => {
                    return {
                      label: item?.author
                        ? `Testimonial: ${item.author}`
                        : "Testimonial",
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
                ],
              },
              // Section Container Block (can contain other blocks)
              {
                name: "section",
                label: "Section Container",
                ui: {
                  itemProps: (item) => {
                    return {
                      label: item?.name ? `Section: ${item.name}` : "Section",
                    };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Section Name (for organization)",
                    description:
                      "This name is only visible in the editor to help you organize sections",
                  },
                  {
                    type: "string",
                    name: "backgroundColor",
                    label: "Background Color",
                    options: ["white", "gray", "dark", "primary"],
                  },
                  {
                    type: "string",
                    name: "paddingSize",
                    label: "Padding Size",
                    options: ["small", "medium", "large"],
                  },
                  {
                    type: "string",
                    name: "maxWidth",
                    label: "Max Width",
                    options: ["narrow", "medium", "wide", "full"],
                  },
                  {
                    type: "object",
                    list: true,
                    name: "content",
                    label: "Section Content",
                    ui: {
                      visualSelector: true,
                    },
                    templates: [
                      // Reference the same block templates, but exclude "section" to prevent nesting sections
                      {
                        name: "hero",
                        label: "Hero Section",
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
                        ],
                      },
                      {
                        name: "content",
                        label: "Content Block",
                        fields: [
                          {
                            type: "rich-text",
                            name: "body",
                            label: "Content",
                            isBody: true,
                          },
                        ],
                      },
                      {
                        name: "twoColumn",
                        label: "Two Column Layout",
                        fields: [
                          {
                            type: "rich-text",
                            name: "leftColumn",
                            label: "Left Column",
                          },
                          {
                            type: "rich-text",
                            name: "rightColumn",
                            label: "Right Column",
                          },
                        ],
                      },
                      {
                        name: "gallery",
                        label: "Image Gallery",
                        fields: [
                          {
                            type: "string",
                            name: "heading",
                            label: "Gallery Heading",
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
                      {
                        name: "features",
                        label: "Features Section",
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
                                name: "title",
                                label: "Feature Title",
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
                                type: "image",
                                name: "icon",
                                label: "Icon/Image",
                              },
                            ],
                          },
                        ],
                      },
                      {
                        name: "testimonial",
                        label: "Testimonial",
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
                        ],
                      },
                      {
                        name: "cta",
                        label: "Call to Action",
                        fields: [
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
                        ],
                      },
                    ],
                  },
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
              // You can add custom MDX components here
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
            type: "string",
            name: "siteTitle",
            label: "Site Title",
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
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
              },
              {
                type: "string",
                name: "url",
                label: "URL",
              },
            ],
          },
          {
            type: "object",
            name: "social",
            label: "Social Media Links",
            fields: [
              {
                type: "string",
                name: "twitter",
                label: "Twitter/X URL",
              },
              {
                type: "string",
                name: "facebook",
                label: "Facebook URL",
              },
              {
                type: "string",
                name: "instagram",
                label: "Instagram URL",
              },
              {
                type: "string",
                name: "github",
                label: "GitHub URL",
              },
            ],
          },
        ],
      },
    ],
  },
});
