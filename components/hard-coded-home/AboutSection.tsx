import React from "react";

const AboutSection = () => {
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
            <h2
              className="font-normal text-black leading-16"
              style={{
                fontSize: "64px",
                fontFamily: "Oooh Baby",
              }}
            >
              For the Parent.
              <br />
              For the Child.
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
              What is Applied Scholastics Online Academy?
            </h3>

            <p
              className="font-normal text-black leading-6 w-full"
              style={{
                fontSize: "16px",
                fontFamily: "Arial",
              }}
            >
              APS Online Academy is an accredited private school that offers
              oversight to parents, tutors, students and learning centers where
              the parent is willing to take responsibility for their own child's
              education. In other words, we are a far-reaching team made up of
              parents-students-tutors-Learning Centers and APS Online educators
              in various locations around the world. Bottom line, parents are
              always involved to a greater or lesser degree – depending on their
              choice!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
