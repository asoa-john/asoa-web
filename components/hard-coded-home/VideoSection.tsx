import React from "react";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  return (
    <section className="w-full bg-white py-[100px]">
      <div className="w-full max-w-[1200px] mx-auto px-14">
        <div className="flex flex-col items-center gap-[100px]">
          {/* Quote Section */}
          <div className="flex items-center justify-center gap-2.5 px-14 py-[100px]">
            <img
              src="/public/uploads/posts/img_.svg"
              alt="Quote left"
              className="w-[46px] h-[34px]"
            />

            <h2
              className="font-normal text-center leading-12 w-[56%]"
              style={{
                fontSize: "48px",
                fontFamily: "Oooh Baby",
                background: "linear-gradient(158deg,#a757b1 0%, #00d9d2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Every child, one for one, deserves a program designed around the
              individual child's world!
            </h2>

            <img
              src="/public/uploads/posts/img_cyan_500_01.svg"
              alt="Quote right"
              className="w-[46px] h-[34px]"
            />
          </div>

          {/* Video Section */}
          <div className="relative w-full max-w-[800px] mx-auto">
            <div
              className="w-full relative"
              style={{
                backgroundImage: "url(/public/uploads/posts/img_1.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "366px",
              }}
            >
              {/* Background Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg,#b4b4b4 0%, #b5b5b500 100%)",
                  width: "54%",
                }}
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(158deg,#a757b14c 0%, #00d9d24c 100%)",
                }}
              />

              {/* Video Thumbnail */}
              <img
                src="/public/uploads/posts/img_video.png"
                alt="Video thumbnail"
                className="absolute right-0 top-0 w-[68%] h-full object-cover"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center">
                <div className="px-[100px] py-[100px] flex flex-col gap-[30px] items-start justify-center w-full">
                  <h3
                    className="font-normal text-white leading-8 w-[48%]"
                    style={{
                      fontSize: "32px",
                      fontFamily: "DM Serif Text",
                    }}
                  >
                    Have a program created exactly for your child!
                  </h3>

                  <Button />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
