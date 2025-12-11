import React from "react";
import Link from "next/link";
import type { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import { iconSchema } from "@/tina/fields/icon";
import { Icon } from "../icon";
import { Button } from "@/components/ui/button";
import { PageBlocksHomeHero } from "@/tina/__generated__/types";
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

export const HomeHero = ({ data }: { data: PageBlocksHomeHero }) => {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="w-full max-w-[1200px] mx-auto px-8 sm:px-12 md:px-14">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Left Image */}
          <div className="w-full lg:w-[46%] shrink-0">
            <img
              src="../public/uploads/posts/img_image.jpg"
              alt="Applied Scholastics Online Academy"
              className="w-full h-auto max-w-[420px] mx-auto lg:mx-0"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[46%] flex flex-col gap-3 text-center lg:text-left">
            <p
              className="font-normal leading-8 w-full text-white"
              style={{
                fontSize: "32px",
                fontFamily: "DM Serif Text",
                textShadow: "0px 0px 100px #000000",
              }}
              data-tina-field={tinaField(data, "text1")}
            >
              {data.text1}
            </p>
            <p
              className="font-normal leading-8 w-full text-white"
              style={{
                fontSize: "32px",
                fontFamily: "DM Serif Text",
                textShadow: "0px 0px 100px #000000",
              }}
              data-tina-field={tinaField(data, "text1")}
            >
              {data.text2}
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {data.actions &&
                data.actions.map((action) => (
                  <div
                    key={action!.label}
                    data-tina-field={tinaField(action)}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      variant={action!.type === "link" ? "ghost" : "default"}
                      className="rounded-xl px-5 text-base"
                    >
                      <Link href={action!.link!}>
                        <span className="text-nowrap">{action!.label}</span>
                        {action?.icon && <Icon data={action?.icon} />}
                      </Link>
                    </Button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const homeHeroBlockSchema: Template = {
  name: "homeHero",
  label: "Hero (Home)",
  ui: {
    previewSrc: "/blocks/home-hero.png",
    defaultItem: {
      text1: "A learning program that is:",
      text2: "Sound different? It is.",
      actions: [
        {
          label: `K\u20138th`,
          type: "button",
          link: "/k-8th",
        },
        {
          label: "High School",
          type: "button",
          link: "/high-school",
        },
      ],
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    {
      type: "string",
      label: "Top Line",
      name: "text1",
      templates: [scriptCopyBlockSchema],
    },
    {
      type: "string",
      label: "Bottom Line",
      name: "text2",
      templates: [scriptCopyBlockSchema],
    },
    {
      label: "Actions",
      name: "actions",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          label: "Action Label",
          type: "button",
          icon: {
            name: "Chevron Right",
            color: "white",
            style: "float",
          },
          link: "/",
        },
        itemProps: (item) => ({ label: item.label }),
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          options: [
            { label: "Button", value: "button" },
            { label: "Link", value: "link" },
          ],
        },
        iconSchema as any,
        {
          label: "Link",
          name: "link",
          type: "string",
        },
      ],
    },
  ],
};
