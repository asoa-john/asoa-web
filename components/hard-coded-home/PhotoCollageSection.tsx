import React from "react";
import { Button } from "@/components/ui/button";

const PhotoCollageSection = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="w-full max-w-[1200px] mx-auto px-18">
        {/* Photo Collage */}
        <div className="relative w-full max-w-[1056px] mx-auto mb-24">
          <div className="flex justify-center items-start w-[78%] mx-auto relative">
            <div className="flex flex-col items-end w-full relative">
              {/* Top Right Image */}
              <img
                src="/public/uploads/posts/img_asian_mother_st.png"
                alt="Asian mother studying"
                className="w-[34%] max-w-[204px] h-auto mr-[68px]"
              />

              {/* Middle Row */}
              <div className="flex justify-end items-center w-full -mt-[74px]">
                <img
                  src="/public/uploads/posts/img_boy_fixing_an_e.png"
                  alt="Boy fixing electronics"
                  className="w-[26%] max-w-[204px] h-auto mb-2.5"
                />
                <div className="flex justify-end items-start -ml-[108px]">
                  <img
                    src="/public/uploads/posts/img_a_young_woman_s.png"
                    alt="Young woman studying"
                    className="w-[52%] max-w-[216px] h-auto mt-[42px]"
                  />
                  <img
                    src="/public/uploads/posts/img_back_view_of_mo.png"
                    alt="Back view of mother"
                    className="w-[48%] max-w-[198px] h-auto -ml-10"
                  />
                </div>
              </div>
            </div>

            {/* Additional positioned images */}
            <img
              src="/public/uploads/posts/img_asian_mother_st_162x216.png"
              alt="Asian mother studying"
              className="absolute w-[24%] max-w-[216px] h-auto top-[22px] -right-9"
            />
          </div>

          {/* Bottom positioned images */}
          <img
            src="/public/uploads/posts/img_a_young_woman_s_150x226.png"
            alt="Young woman studying"
            className="absolute w-[20%] max-w-[226px] h-auto bottom-[72px] right-0"
          />
          <img
            src="/public/uploads/posts/img_back_view_of_mo_282x188.png"
            alt="Back view of mother"
            className="absolute w-[20%] max-w-[188px] h-auto top-0 left-[166px]"
          />
          <img
            src="/public/uploads/posts/img_boy_fixing_an_e_144x216.png"
            alt="Boy fixing electronics"
            className="absolute w-[20%] max-w-[216px] h-auto bottom-[88px] left-0"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative -mt-[294px] z-10">
          <div className="flex flex-col items-center w-full">
            {/* White Gradient Overlay */}
            <div
              className="w-full h-[296px]"
              style={{
                background:
                  "linear-gradient(180deg,#ffffff 0%, #ffffff00 100%)",
              }}
            />

            {/* Main Content */}
            <div className="flex flex-col gap-3 items-center w-full max-w-[600px] mx-auto px-[300px] py-[50px]">
              <h2
                className="font-normal text-white leading-16 text-center w-full"
                style={{
                  fontSize: "64px",
                  fontFamily: "Oooh Baby",
                }}
              >
                Prepare Your Child for a Successful Life
              </h2>

              <h3
                className="font-normal text-white leading-8 text-center w-full"
                style={{
                  fontSize: "32px",
                  fontFamily: "DM Serif Text",
                }}
              >
                Register and Start with
                <br />
                Applied Scholastics Online Academy Today!
              </h3>

              <p
                className="font-normal text-white leading-6 text-left w-full"
                style={{
                  fontSize: "16px",
                  fontFamily: "Arial",
                }}
              >
                If you share the same goals as above for your family, get
                started on an educational journey tailored specifically to your
                child's purpose and interests. We are with you every step of the
                way!
              </p>
            </div>

            <Button />

            {/* Bottom Gradient */}
            <div
              className="w-full h-[196px]"
              style={{
                background: "linear-gradient(0deg,#ffffff 0%, #ffffff00 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCollageSection;
