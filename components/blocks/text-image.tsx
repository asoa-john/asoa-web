import React from "react";
import Link from "next/link";
import type { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import { PageBlocksTextImage } from "@/tina/__generated__/types";
import { ArrowRight } from "lucide-react";
import { AnimatedGroup } from "../motion-primitives/animated-group";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Mermaid } from "./mermaid";
import { sectionBlockSchemaField } from "../layout/section";
import {
  scriptCopyBlockSchema,
  ScriptCopyBtn,
} from "../magicui/script-copy-btn";
import type { Transition } from "motion/react";

//@ts-ignore
export const TextImage = ({ data }: { data: PageBlocksTextImage }) => {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="w-full max-w-[1200px] mx-auto px-8 sm:px-12 md:px-14">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Left Image */}
          <div className="w-full lg:w-[46%] shrink-0">
            <img
              src={data.img || "/placeholder.webp"}
              alt={data.alt || ""}
              className="w-full h-auto max-w-[420px] mx-auto lg:mx-0"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[46%] flex flex-col gap-3 text-center lg:text-left">
            <h2
              className="font-cursive text-black leading-16"
              style={{
                fontSize: "64px",
              }}
            >
              For the Parent.
              <br />
              For the Child.
            </h2>

            <h3
              className="font-serif leading-8 w-full"
              style={{
                fontSize: "32px",
                background: "linear-gradient(158deg,#a757b1 0%, #00d9d2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              What is Applied Scholastics Online Academy?
            </h3>

            <TinaMarkdown
              content={data.body}
              components={{
                mermaid: (props: any) => <Mermaid {...props} />,
                scriptCopyBlock: (props: any) => <ScriptCopyBtn {...props} />,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const textImageBlockSchema: Template = {
  name: "textImage",
  label: "Text/Image",
  ui: {
    previewSrc: "/blocks/text-image.png",
    defaultItem: {
      img: "/placeholder.webp",
      alt: "",
      url: "https://tina.io/editorial-workflow",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat orci sed dictum fermentum. Sed tristique interdum odio, quis tincidunt est finibus non. Integer at ante vel nunc ultrices auctor sit amet fringilla mauris. Nam eu ipsum metus. Maecenas condimentum vel tellus quis rhoncus. Sed consectetur nisi lacus, at tincidunt elit mollis ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci felis, viverra non lobortis vel, auctor eget ligula.",
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    {
      type: "image",
      label: "Image",
      name: "img",
    },
    {
      type: "string",
      label: "Alt Text",
      name: "alt",
    },
    {
      type: "rich-text",
      label: "Body",
      name: "body",
      templates: [scriptCopyBlockSchema],
    },
    {
      type: "string",
      label: "Url",
      name: "url",
    },
  ],
};
