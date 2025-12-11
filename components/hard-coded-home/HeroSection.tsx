import React, { useState } from "react";
import Link from "next/link";
import type { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import { PageBlocksHome } from "@/tina/__generated__/types";
import { ArrowRight } from "lucide-react";
import { AnimatedGroup } from "../motion-primitives/animated-group";
import { sectionBlockSchemaField } from "../layout/section";
import type { Transition } from "motion/react";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { text: "Home", active: true },
    { text: "Bookstore", active: false },
    { text: "News", active: false },
    { text: "About", active: false },
    { text: "Testimonials", active: false },
    { text: "Contact", active: false },
  ];

  return (
    <section className="w-full bg-white relative">
      <div className="w-full mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-6">
            <img
              src="/public/uploads/posts/img_logo_for_now_1.png"
              alt="Applied Scholastics Logo"
              className="w-[18px] sm:w-6 md:w-[30px] lg:w-9 h-auto"
            />
            <div className="text-left">
              <div
                className="font-normal leading-4"
                style={{
                  fontSize: "16px",
                  fontFamily: "DM Serif Text",
                  color: "#000000",
                }}
              >
                Applied Scholastics Online Academy
              </div>
              <div
                className="font-normal leading-4 mt-1"
                style={{
                  fontSize: "11px",
                  fontFamily: "Arial",
                  color: "#000000cc",
                }}
              >
                Accredited K-12
                <br />
                Online Private School
              </div>
            </div>
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button
            className="block lg:hidden p-2"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-end flex-1 px-5">
            <div className="flex items-center">
              {menuItems?.map((item, index) => (
                <div
                  key={index}
                  role="menuitem"
                  className={`p-1.5 rounded-sm cursor-pointer hover:bg-gray-100 transition-colors duration-200 ${
                    index === 1
                      ? "ml-4"
                      : index === 2
                      ? "ml-6"
                      : index === 3
                      ? "ml-[22px]"
                      : index > 0
                      ? "ml-6"
                      : ""
                  } ${item?.active ? "bg-[#ffffff33]" : ""}`}
                  style={{
                    fontSize: "16px",
                    fontFamily: "Arial",
                    fontWeight: "400",
                    lineHeight: "19px",
                    color: "#000000cc",
                  }}
                >
                  {item?.text}
                </div>
              ))}
            </div>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button />
            <Button />
          </div>

          {/* Mobile Navigation */}
          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } lg:hidden top-full left-0 w-full bg-white shadow-lg z-50`}
          >
            <div className="px-4 py-2 space-y-2">
              {menuItems?.map((item, index) => (
                <div
                  key={index}
                  role="menuitem"
                  className={`block px-4 py-3 rounded-sm cursor-pointer hover:bg-gray-100 transition-colors duration-200 ${
                    item?.active ? "bg-[#ffffff33]" : ""
                  }`}
                  style={{
                    fontSize: "16px",
                    fontFamily: "Arial",
                    fontWeight: "400",
                    lineHeight: "19px",
                    color: "#000000cc",
                  }}
                >
                  {item?.text}
                </div>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Button />
                <Button />
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="relative w-full">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              background:
                "linear-gradient(156deg,#a758b27f 0%, #00dad27f 100%)",
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-[50px] px-8 sm:px-12 md:px-14 py-[100px]">
              {/* Left Image */}
              <div className="w-full md:w-[348px] shrink-0">
                <img
                  src="/public/uploads/posts/img_girl_writing_on.png"
                  alt="Girl writing"
                  className="w-full h-auto max-w-[348px] mx-auto"
                />
              </div>

              {/* Right Content */}
              <div className="flex flex-col gap-8 text-center md:text-left max-w-lg">
                <h1
                  className="font-normal text-white leading-8"
                  style={{
                    fontSize: "32px",
                    fontFamily: "DM Serif Text",
                    textShadow: "0px 0px 100px #000000",
                  }}
                >
                  A learning program that is:
                </h1>

                <div
                  className="font-normal text-white leading-20"
                  style={{
                    fontSize: "96px",
                    fontFamily: "Oooh Baby",
                    textShadow: "0px 0px 100px #000000",
                  }}
                >
                  tailored
                </div>

                <div
                  className="text-white leading-8"
                  style={{ textShadow: "0px 0px 100px #000000" }}
                >
                  <span
                    className="font-normal"
                    style={{
                      fontSize: "32px",
                      fontFamily: "DM Serif Text",
                    }}
                  >
                    Sound{" "}
                  </span>
                  <span
                    className="font-normal"
                    style={{
                      fontSize: "40px",
                      fontFamily: "Oooh Baby",
                    }}
                  >
                    different?
                  </span>
                  <br />
                  <br />
                  <span
                    className="font-normal"
                    style={{
                      fontSize: "32px",
                      fontFamily: "DM Serif Text",
                    }}
                  >
                    It is.
                  </span>
                </div>

                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
