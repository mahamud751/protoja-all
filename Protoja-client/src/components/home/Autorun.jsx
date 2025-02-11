"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const servicesList = [
  "UX Design",
  "User Testing",
  "Product Prototype",
  "Mobile UI",
  "Sotware UI design",
  "Web app design",
  "Interaction design",
];
gsap.registerPlugin(ScrollTrigger);

const Autorun = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
        height: "53vh",
        duration: 1.5,
        ease: "power1.out",
      });
    });
  }, [sectionRefs]);

  return (
    <div className="text-black bg-black">
      <p className="">What we offer</p>
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        id="section1"
        className=" bg-[#E8E8E8] z-0 overflow-hidden"
        style={{ height: "25vh" }}
      >
        <div className="flex justify-between p-12">
          <div>
            <h1>MVP Development</h1>
            <p className="mt-32 text-3xl w-[418px]">
              Our product design services focus on creating intuitive and
              aesthetically pleasing products that resonate with your audience
              and stand out in the market.
            </p>
          </div>
          <div className="mt-60">
            {servicesList.map((service, index) => (
              <p key={index} className="text-xl">
                {" "}
                {service}
              </p>
            ))}
          </div>
          <div className="min-w-[240px] w-[654px]">
            <Image
              loading="lazy"
              src="/assets/scrool/3.png"
              alt="Product design visualization"
              style={{ height: 420 }}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        id="section2"
        className=" bg-[#F76F00] z-1 overflow-hidden"
        style={{ height: "25vh" }}
      >
        <div className="flex justify-between p-12">
          <div>
            <h1>Visual Identity</h1>
            <p className="mt-32 text-3xl w-[418px]">
              Our product design services focus on creating intuitive and
              aesthetically pleasing products that resonate with your audience
              and stand out in the market.
            </p>
          </div>
          <div className="mt-60">
            {servicesList.map((service, index) => (
              <p key={index} className="text-xl">
                {" "}
                {service}
              </p>
            ))}
          </div>
          <div className="min-w-[240px] w-[654px]">
            <Image
              loading="lazy"
              src="/assets/scrool/2.png"
              alt="Product design visualization"
              style={{ height: 420 }}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        id="section3"
        className=" bg-[#FFD580] z-2 overflow-hidden"
        style={{ height: "25vh" }}
      >
        <div className="flex justify-between p-12">
          <div>
            <h1>Website</h1>
            <p className="mt-32 text-3xl w-[418px]">
              Our product design services focus on creating intuitive and
              aesthetically pleasing products that resonate with your audience
              and stand out in the market.
            </p>
          </div>
          <div className="mt-60">
            {servicesList.map((service, index) => (
              <p key={index} className="text-xl">
                {" "}
                {service}
              </p>
            ))}
          </div>
          <div className="min-w-[240px] w-[654px]">
            <Image
              loading="lazy"
              src="/assets/scrool/4.png"
              alt="Product design visualization"
              style={{ height: 420 }}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        id="section4"
        className=" bg-[#272727] z-3 overflow-hidden"
        style={{ height: "25vh" }}
      >
        <div className="flex justify-between p-12 text-white">
          <div>
            <h1 className="text-white">Product</h1>
            <p className="mt-32 text-3xl w-[418px]">
              Our product design services focus on creating intuitive and
              aesthetically pleasing products that resonate with your audience
              and stand out in the market.
            </p>
          </div>
          <div className="mt-60">
            {servicesList.map((service, index) => (
              <p key={index} className="text-xl ">
                {" "}
                {service}
              </p>
            ))}
          </div>
          <div className=" min-h-[303px] min-w-[240px] w-[654px]">
            <Image
              loading="lazy"
              src="/assets/scrool/1.png"
              alt="Product design visualization"
              style={{ height: 420 }}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Autorun;
