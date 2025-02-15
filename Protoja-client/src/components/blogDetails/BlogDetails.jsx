"use client"
import * as React from 'react';
import { useState } from 'react';
import { Link, Element } from 'react-scroll'; // Importing from react-scroll
import { InView } from 'react-intersection-observer'; // Importing InView from react-intersection-observer
import Image from 'next/image';
import { FaFacebook, FaLink, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function BlogDetails() {
  const [activeLink, setActiveLink] = useState("");

  return (
    <div className="grid grid-cols-12 gap-8 my-10">
      {/* Left Part: Table of Contents */}
      <div className="col-span-4 bg-white p-6 shadow-lg rounded-xl sticky top-20 h-screen overflow-y-auto">
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Table of Contents</h3>
        <ul className="list-decimal pl-4 space-y-3 text-gray-700">
          <li>
            <Link
              to="introduction"
              smooth={true}
              duration={500}
              className={`hover:text-orange-600 ${activeLink === "introduction" ? "text-orange-600" : ""}`}
            >
              Introduction
            </Link>
          </li>
          <li>
            <Link
              to="software-and-tools"
              smooth={true}
              duration={500}
              className={`hover:text-orange-600 ${activeLink === "software-and-tools" ? "text-orange-600" : ""}`}
            >
              Software and Tools
            </Link>
          </li>
          <li>
            <Link
              to="other-resources"
              smooth={true}
              duration={500}
              className={`hover:text-orange-600 ${activeLink === "other-resources" ? "text-orange-600" : ""}`}
            >
              Other Resources
            </Link>
          </li>
          <li>
            <Link
              to="consultations"
              smooth={true}
              duration={500}
              className={`hover:text-orange-600 ${activeLink === "consultations" ? "text-orange-600" : ""}`}
            >
              Consultations
            </Link>
          </li>
        </ul>
        <div className="mt-8 flex justify-start space-x-4">

          <FaLink className='w-7 h-7 p-1 bg-base-100 text-black rounded-full border-2 border-gray-100' />
          <FaXTwitter className='w-7 h-7 p-1 bg-base-100 text-black rounded-full border-2 border-gray-100' />
          <FaFacebook className='w-7 h-7 p-1 bg-base-100 text-black rounded-full border-2 border-gray-100' />
          <FaLinkedin className='w-7 h-7 p-1 bg-base-100 text-black rounded-full border-2 border-gray-100' />



        </div>
      </div>

      {/* Right Part: Main Content */}
      <div className="col-span-8 px-6 py-8 scroll-smooth">
        {/* Introduction Section */}
        <InView
          as="section"
          id="introduction"
          onChange={(inView) => { if (inView) setActiveLink("introduction"); }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget tincidunt purus. Sed vehicula, tortor a tincidunt
            efficitur, risus turpis egestas dui, at euismod felis leo vel nulla. Quisque ullamcorper leo erat, sed fermentum neque
            facilisis sit amet. Aenean a lorem sit amet nulla auctor efficitur. Mauris volutpat magna id lectus lobortis, eu suscipit dui
            scelerisque. Cras gravida, nunc at vehicula lacinia, velit risus porttitor nunc, sed hendrerit risus est non mi.
          </p>



          <div className="flex justify-center  my-5">

            <Image
              src="/assets/blog-image/blog-details1.png" // Example image
              alt="Magestic Logo"
              width={500}
              height={500}
              className=""
            />


          </div>
          <blockquote className="text-lg text-gray-800 italic font-bold">
            {`"In a world older and more complex than ours they move finished and complete, gifted with dimensions of the senses we have
            never attained, trying to voice what shall never have!"`}


            <div className="flex items-center mt-6">
              <Image
                src="/assets/blog-image/author.png"
                width={60}
                height={60}
                className="rounded-full"
                alt="Author"
              />
              <div className="ml-3 text-sm text-gray-600">
                <span className="font-semibold">Md Rafatul Islam</span>
                <div>Product Designer</div>
              </div>
            </div>



          </blockquote>

        </InView>



        {/* Software and Tools Section */}
        <InView className='mt-3'
          id="software-and-tools"
          onChange={(inView) => { if (inView) setActiveLink("software-and-tools"); }}

        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Software and Tools</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin, eros et fringilla iaculis, felis nunc condimentum
            eros, nec fermentum dui nisl id elit. Curabitur euismod metus eu ante facilisis, in faucibus odio vehicula. Integer vitae eros
            vitae tortor malesuada suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin, eros et fringilla
            iaculis, felis nunc condimentum eros.
          </p>
        </InView>
      </div>
    </div>
  );
}
