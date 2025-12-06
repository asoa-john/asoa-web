import React from "react";
import Link from "next/link";
import type { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import { PageBlocksHome } from "@/tina/__generated__/types";
import { ArrowRight } from "lucide-react";
import { AnimatedGroup } from "../motion-primitives/animated-group";
import { sectionBlockSchemaField } from "../layout/section";
import type { Transition } from "motion/react";

import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import WhyChooseSection from "./WhyChooseSection";
import VideoSection from "./VideoSection";
import TestimonialsSection from "./TestimonialsSection";
import GoalsSection from "./GoalsSection";
import PhotoCollageSection from "./PhotoCollageSection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";

export const Home = ({ data }: { data: PageBlocksHome }) => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <VideoSection />
      <TestimonialsSection />
      <GoalsSection />
      <PhotoCollageSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export const homeBlockSchema: Template = {
  name: "home",
  label: "Home",
  ui: {
    previewSrc: "/blocks/home.png",
    defaultItem: {
      url: "https://tina.io/editorial-workflow",
      text: "Support for live editing and editorial workflow",
    },
  },
  fields: [
    sectionBlockSchemaField as any,
    {
      type: "string",
      label: "Text",
      name: "text",
    },
    {
      type: "string",
      label: "Url",
      name: "url",
    },
  ],
};
