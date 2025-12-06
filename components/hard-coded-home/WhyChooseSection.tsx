import React from "react";

const WhyChooseSection = () => {
  return (
    <section className="w-full relative">
      <div
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: "url(/public/uploads/posts/img_0x0.png)",
          background: "linear-gradient(158deg,#a757b133 0%, #00d9d233 100%)",
        }}
      >
        <div className="w-full py-[94px] px-14">
          <div className="w-full max-w-[1200px] mx-auto flex justify-center">
            <div className="w-[54%] flex flex-col items-center gap-2.5 mb-1">
              <div className="flex flex-col items-center w-full">
                <h2
                  className="font-normal text-white leading-[79px] text-center"
                  style={{
                    fontSize: "64px",
                    fontFamily: "Oooh Baby",
                  }}
                >
                  A One of a Kind
                </h2>

                <h3
                  className="font-normal text-white leading-8 text-center -mt-2"
                  style={{
                    fontSize: "32px",
                    fontFamily: "DM Serif Text",
                  }}
                >
                  Why Choose Applied Scholastics
                  <br />
                  Online Academy?
                </h3>
              </div>

              <p
                className="font-normal text-white leading-6 text-left w-full"
                style={{
                  fontSize: "16px",
                  fontFamily: "Arial",
                }}
              >
                At APS Online Academy, one of our proudest hallmarks is the
                creation of school programs tailored to each child's unique
                interests, purposes, and dreams! This is something a standard
                curriculum can never do. We feel that every child, one for one,
                deserves a program designed around the individual child's world!
                This is where APS Online is different. We embrace every child's
                uniqueness, we answer every child's origination, we handle every
                parent's concern with empathy and workable solutions using Mr.
                Hubbard's educational philosophy. We are there for our parents,
                students, tutors and groups every step of the way! We consider
                them our family, and we love helping them with anything that
                might beset their schooling journey!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div
          className="flex items-center gap-12 px-1 py-1 rounded"
          style={{
            background: "linear-gradient(178deg,#a758b233 0%, #00d9d233 100%)",
          }}
        >
          <div
            className="font-normal text-black leading-[19px] self-end cursor-pointer hover:opacity-75"
            style={{
              fontSize: "16px",
              fontFamily: "Arial",
              color: "#000000cc",
            }}
          >
            Why Choose Us?
          </div>

          <div
            className="font-normal text-black leading-[19px] cursor-pointer hover:opacity-75"
            style={{
              fontSize: "16px",
              fontFamily: "Arial",
              color: "#000000cc",
            }}
          >
            How Does it work?
          </div>

          <div
            className="font-normal text-black leading-[19px] cursor-pointer hover:opacity-75"
            style={{
              fontSize: "16px",
              fontFamily: "Arial",
              color: "#000000cc",
            }}
          >
            Our Views
          </div>

          <div
            className="font-normal text-black leading-[19px] cursor-pointer hover:opacity-75"
            style={{
              fontSize: "16px",
              fontFamily: "Arial",
              color: "#000000cc",
            }}
          >
            Our Goals
          </div>

          <div
            className="font-normal text-black leading-[19px] cursor-pointer hover:opacity-75"
            style={{
              fontSize: "16px",
              fontFamily: "Arial",
              color: "#000000cc",
            }}
          >
            FAQs
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
