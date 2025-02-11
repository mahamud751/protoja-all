"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const Question = ({ header }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="bg-[#272727]">
      <div className="flex flex-col">
        <div
          className={`flex flex-col pb-48 w-full min-h-[899px] max-md:pb-24 max-md:max-w-full ${
            isVisible ? "animate__animated animate__fadeIn" : ""
          }`}
          ref={ref}
        >
          <div className="flex relative flex-wrap gap-2 items-center self-center mt-28 mb-0 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
            <div
              className={`flex flex-col justify-center self-stretch px-6 py-11 my-auto rounded-2xl bg-white min-h-[505px] min-w-[240px] w-[867px] max-md:px-5 max-md:max-w-full ${
                isVisible ? "animate__animated animate__fadeInLeft" : ""
              }`}
            >
              <p className=" text-black text-5xl">{header}</p>
              <p className=" text-black font-light text-2xl">
                Let’s talk, no strings attached
              </p>
              <div className="flex flex-col mt-10 w-full max-md:max-w-full">
                <div className="gap-2.5 self-stretch px-2.5 py-4 w-full text-7xl font-bold border-b border-zinc-300 leading-[104px] text-neutral-700 max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
                  Let’s work
                </div>
                <div className="flex  text-black mt-20">
                  <div>
                    <button className="px-6 py-2 bg-orange-500 min-w-[240px] rounded-[100px]">
                      Book a free Consultation today!
                    </button>
                  </div>
                  <div>
                    <Image
                      loading="lazy"
                      src="/assets/scrool/arrowo.png"
                      width={220}
                      height={220}
                      alt="arrow"
                      className="w-[39px] h-[39px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`px-6 rounded-2xl bg-[#F76F00] min-w-[240px] w-[309px] max-md:px-5 ${
                isVisible ? "animate__animated animate__fadeInRight" : ""
              }`}
              style={{ height: "500px" }}
            >
              <div>
                <Image
                  src={"/assets/scrool/logo.png"}
                  width={1000}
                  height={1000}
                  alt="Profile picture of Rafat, Design Head at Protoja"
                  className="w-[100px] mt-24"
                />
              </div>

              <p className="mt-12 text-black">
                {" "}
                My Name is Rafat, Design Head at Protoja. I will answer all your
                Question
              </p>
              <div className="text-black border-b border-[#D16004] mt-10"></div>
              <div className="text-gray-200 flex mt-20">
                <button className="w-[100%] bg-[#272727] p-2 rounded-[1440px]">
                  <span className="self-stretch my-auto text-[#F76F00]">
                    Ask Questions
                  </span>
                </button>
                <div className="flex overflow-hidden justify-center items-center px-2.5 bg-[#272727] rounded-2xl h-[33px] min-h-[33px] w-[33px]">
                  <Image
                    loading="lazy"
                    src="/assets/scrool/whatsapp.png"
                    className="w-[320px]"
                    width={220}
                    height={220}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
