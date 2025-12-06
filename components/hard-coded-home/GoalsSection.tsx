import React from "react";

const GoalsSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="w-full max-w-[1200px] mx-auto px-14">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Left Image */}
          <div className="w-full lg:w-[46%] shrink-0">
            <img
              src="/public/uploads/posts/img_image_384x420.png"
              alt="Goals for Your Family"
              className="w-full h-auto max-w-[420px] mx-auto lg:mx-0"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[46%] flex flex-col gap-3 text-center lg:text-left">
            <h2
              className="font-normal text-black leading-16 w-full"
              style={{
                fontSize: "64px",
                fontFamily: "Oooh Baby",
              }}
            >
              Goals
              <br />
              for Your Family
            </h2>

            <h3
              className="font-normal leading-8 w-full"
              style={{
                fontSize: "32px",
                fontFamily: "DM Serif Text",
                background: "linear-gradient(158deg,#a757b1 0%, #00d9d2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              What are the Goals of Applied Scholastics Online Academy?
            </h3>

            <p
              className="font-normal text-black leading-6 w-full"
              style={{
                fontSize: "16px",
                fontFamily: "Arial",
              }}
            >
              Honoring the family unit, heightening the beautiful affinity
              between parents and their children, making what one studies a
              self-determined choice, and ensuring every student finds joy in
              learning and studying, are some of the goals of APS Online
              Academy. Our teamship with parents and groups around the world is
              making these goals a reality!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
