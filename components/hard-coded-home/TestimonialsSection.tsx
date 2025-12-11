import React from "react";
import Link from "next/link";
import type { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import { PageBlocksHome } from "@/tina/__generated__/types";
import { ArrowRight } from "lucide-react";
import { AnimatedGroup } from "../motion-primitives/animated-group";
import { sectionBlockSchemaField } from "../layout/section";
import type { Transition } from "motion/react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: "/public/uploads/posts/img_stars.png",
      quote:
        '"Place a testimonial here. A brief success story about working with Applied Scholastics Online Academy Show go here."',
      author: "B.N.",
    },
    {
      rating: "/public/uploads/posts/img_stars.png",
      quote:
        '"A brief success story about working with Applied Scholastics Online Academy Show go here. Place a testimonial here."',
      author: "M.A.",
    },
    {
      rating: "/public/uploads/posts/img_stars.png",
      quote:
        '"Place a testimonial here. A brief success story about working with Applied Scholastics Online Academy Show go here."',
      author: "G.T.",
    },
  ];

  return (
    <section className="w-full bg-white py-8">
      <div className="w-full max-w-container mx-auto px-2.5">
        <div className="flex flex-col lg:flex-row gap-16 max-w-[1020px] mx-auto">
          {testimonials?.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-3.5 items-start w-full lg:w-[284px]"
            >
              <img
                src={testimonial?.rating}
                alt="5 star rating"
                className="w-[36%] max-w-[102px] h-auto"
              />

              <p
                className="font-normal leading-[22px] w-full"
                style={{
                  fontSize: "16px",
                  fontFamily: "Arial",
                  color: "#000000cc",
                }}
              >
                {testimonial?.quote}
              </p>

              <div
                className="font-normal leading-[25px]"
                style={{
                  fontSize: "20px",
                  fontFamily: "Oooh Baby",
                  color: "#000000cc",
                }}
              >
                {testimonial?.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
