import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="w-full">
      <div
        className="w-full py-[94px]"
        style={{
          background: "linear-gradient(158deg,#a757b133 0%, #00d9d233 100%)",
        }}
      >
        <div className="flex flex-col gap-[38px] items-center w-full">
          {/* Main Footer Content */}
          <div className="flex justify-center items-start w-full max-w-container mx-auto px-[6px] mt-1">
            {/* Logo and Social Section */}
            <div className="flex flex-col gap-6 items-center w-[28%]">
              <div className="flex items-center w-full">
                <img
                  src="/public/uploads/posts/img_logo_for_now_1.png"
                  alt="Applied Scholastics Logo"
                  className="w-[14%] max-w-[36px] h-auto"
                />
                <div className="ml-6 w-[56%]">
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

              <div className="flex items-center w-full">
                <img
                  src="/public/uploads/posts/img_icon.svg"
                  alt="Facebook"
                  className="w-[22px] h-[24px]"
                />
                <img
                  src="/public/uploads/posts/img_icon_gray_900.svg"
                  alt="Twitter"
                  className="w-[24px] h-[24px] ml-4"
                />
                <img
                  src="/public/uploads/posts/img_logo_youtube.svg"
                  alt="YouTube"
                  className="w-[24px] h-[24px] ml-4"
                />
                <img
                  src="/public/uploads/posts/img_icon_gray_900_24x24.svg"
                  alt="Instagram"
                  className="w-[24px] h-[24px] ml-4"
                />
              </div>
            </div>

            {/* Navigation Section */}
            <div className="flex flex-col gap-2 items-center w-full px-[50px]">
              <div className="flex items-center w-full">
                <Button />

                <div
                  className="ml-4 cursor-pointer hover:opacity-75"
                  style={{
                    fontSize: "16px",
                    fontFamily: "Arial",
                    fontWeight: "400",
                    lineHeight: "19px",
                    color: "#000000cc",
                  }}
                >
                  Bookstore
                </div>

                <div
                  className="ml-6 cursor-pointer hover:opacity-75"
                  style={{
                    fontSize: "16px",
                    fontFamily: "Arial",
                    fontWeight: "400",
                    lineHeight: "19px",
                    color: "#000000cc",
                  }}
                >
                  News
                </div>

                <div
                  className="ml-[22px] cursor-pointer hover:opacity-75"
                  style={{
                    fontSize: "16px",
                    fontFamily: "Arial",
                    fontWeight: "400",
                    lineHeight: "19px",
                    color: "#000000cc",
                  }}
                >
                  About
                </div>

                <div
                  className="ml-6 cursor-pointer hover:opacity-75"
                  style={{
                    fontSize: "16px",
                    fontFamily: "Arial",
                    fontWeight: "400",
                    lineHeight: "19px",
                    color: "#000000cc",
                  }}
                >
                  Testimonials
                </div>
              </div>

              <div className="flex justify-center items-center w-full px-2">
                <div
                  className="cursor-pointer hover:opacity-75"
                  style={{
                    fontSize: "16px",
                    fontFamily: "Arial",
                    fontWeight: "400",
                    lineHeight: "19px",
                    color: "#000000cc",
                  }}
                >
                  Contact
                </div>

                <div className="flex items-center px-6 py-1">
                  <div
                    className="cursor-pointer hover:opacity-75"
                    style={{
                      fontSize: "16px",
                      fontFamily: "Arial",
                      fontWeight: "400",
                      lineHeight: "19px",
                      color: "#000000cc",
                    }}
                  >
                    Trademark Information
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons Section */}
            <div className="flex flex-col gap-5 items-center w-[14%]">
              <Button />

              <Button />
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex justify-between items-center w-full max-w-container mx-auto px-[10px]">
            <div
              className="font-normal leading-[19px]"
              style={{
                fontSize: "16px",
                fontFamily: "Arial",
                color: "#000000cc",
              }}
            >
              © 2022 Applied Scholastics Online. All Rights Reserved.
            </div>

            <div
              className="font-normal leading-[19px]"
              style={{
                fontSize: "16px",
                fontFamily: "Arial",
                color: "#000000cc",
              }}
            >
              Website by{" "}
              <span
                style={{
                  background:
                    "linear-gradient(158deg,#a757b1 0%, #00d9d2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                joerhoney.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
