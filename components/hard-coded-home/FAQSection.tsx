import React from "react";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const Line = ({ className = "" }) => (
    <div
      className={`w-[8px] h-[8px] border-2 border-solid border-black ${className}`}
    />
  );

  return (
    <section className="w-full bg-white py-12">
      <div className="w-full max-w-[638px] mx-auto px-8 sm:px-12 md:px-14">
        <div className="flex gap-[10px] items-start">
          {/* Left Timeline */}
          <div className="flex flex-col items-center w-[5%] pt-[186px]">
            {/* Timeline dots */}
            {Array.from({ length: 7 })?.map((_, index) => (
              <img
                key={index}
                src="/public/uploads/posts/img_group_17.svg"
                alt="Timeline dot"
                className={`w-[20px] h-[20px] ${index > 0 ? "mt-7" : ""}`}
              />
            ))}

            {/* Plus icon container */}
            <div className="flex flex-col items-center w-full mt-[22px] border-2 border-solid border-black rounded-[14px] p-2">
              <div className="flex flex-col items-center w-full">
                <Line />
                <Line className="-mt-1.5" />
              </div>
            </div>

            {/* More timeline dots */}
            {Array.from({ length: 4 })?.map((_, index) => (
              <img
                key={`bottom-${index}`}
                src="/public/uploads/posts/img_group_17.svg"
                alt="Timeline dot"
                className={`w-[20px] h-[20px] ${
                  index === 0 ? "mt-[70px]" : "mt-7"
                }`}
              />
            ))}

            {/* Second plus icon container */}
            <div className="relative mt-[22px] w-7 h-7">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Line />
                <Line className="-mt-1.5" />
              </div>
              <div className="w-7 h-7 border-2 border-solid border-black rounded-[14px]" />
            </div>

            {/* Final timeline icon */}
            <img
              src="/public/uploads/posts/img_group_15.svg"
              alt="Final timeline icon"
              className="w-7 h-7 mt-[162px]"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-center w-full">
            <h2
              className="font-normal text-black leading-16 text-center w-full"
              style={{
                fontSize: "64px",
                fontFamily: "Oooh Baby",
              }}
            >
              Frequently Asked Questions
            </h2>

            <h3
              className="font-normal text-center mt-1"
              style={{
                fontSize: "32px",
                fontFamily: "DM Serif Text",
                lineHeight: "44px",
                background: "linear-gradient(158deg,#a757b1 0%, #00d9d2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Applied Scholastics Online Academy
            </h3>

            <div className="flex flex-col items-start w-full mb-20 mt-4">
              <div className="relative w-full h-[936px]">
                <div
                  className="font-normal text-black leading-6 text-left"
                  style={{
                    fontSize: "16px",
                    fontFamily: "Arial",
                  }}
                >
                  <div className="font-bold">
                    Can my child work at his own pace and focus on subjects he
                    excels in?
                  </div>
                  <br />
                  <div className="font-bold">
                    Can I make travel part of my child's education?
                  </div>
                  <br />
                  <div className="font-bold">
                    Can we use materials of our own choice?
                  </div>
                  <br />
                  <div className="font-bold">
                    Can we create our own schedule to fit our lifestyle?
                  </div>
                  <br />
                  <div className="font-bold">
                    Is APS Online a religious organization?
                  </div>
                  <br />
                  <div className="font-bold">
                    Does APS Online Academy meet legal standards in my state?
                  </div>
                  <br />
                  <div className="font-bold">How much does tuition cost?</div>
                  <br />
                  <div className="font-bold">Can I cancel at any time?</div>
                  <br />
                  <div className="font-normal">
                    The answer would need to be "no." If we write a customized
                    program for a student, it is done in good faith that the
                    student will stay with us and do the program.
                  </div>
                  <br />
                  <br />
                  <div className="font-bold">
                    Is APS Online a charter or private school?
                  </div>
                  <br />
                  <div className="font-bold">
                    Does APS Online prepare students for SAT?
                  </div>
                  <br />
                  <div className="font-bold">
                    Does APS Online prepare students for college?
                  </div>
                  <br />
                  <div className="font-bold">
                    Does APS Online support/offer dual enrollment?
                  </div>
                  <br />
                  <div className="font-bold">How does it work?</div>
                  <br />
                  <div className="font-normal">
                    We have two basic options to choose from, depending on your
                    preference of frequency, guidance and delivery. These differ
                    slightly depending on the grade range you are applying for.
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="font-bold">How do I sign up?</div>
                  <br />
                  <div className="font-bold">
                    You can get started by signing up right here on our website!
                  </div>
                  <br />
                  <br />
                  <br />
                </div>

                <div className="flex items-center gap-6 w-full mb-[126px] mt-4">
                  <Button />

                  <Button />
                </div>
              </div>

              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
