"use client"
import * as React from 'react';
import { useState } from 'react';
import { Link, Element } from 'react-scroll'; // Importing from react-scroll
import { InView } from 'react-intersection-observer'; // Importing InView from react-intersection-observer
import Image from 'next/image';

export default function BlogDetails() {
  const [activeLink, setActiveLink] = useState("");

  return (
    <div className="grid grid-cols-12 gap-8">
      {/* Left Part: Table of Contents */}
      <div className="col-span-4 bg-white p-6 shadow-lg rounded-xl sticky top-0 h-screen overflow-y-auto">
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
          <Image
            src="/assets/icons/icon1.png" 
            alt="Icon 1"
            width={24} 
            height={24}
          />
          <Image
            src="/assets/icons/icon2.png" 
            alt="Icon 2"
            width={24} 
            height={24}
          />
          <Image
            src="/assets/icons/icon3.png" 
            alt="Icon 3"
            width={24} 
            height={24}
          />
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
        </InView>

        {/* Logo/Image with Description */}
        <InView
          as="section"
          id="software-and-tools"
          onChange={(inView) => { if (inView) setActiveLink("software-and-tools"); }}
        >
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16">
              <Image
                src="/assets/blog-image/Magestic-logo.png" // Example image
                alt="Magestic Logo"
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Magestic.xyz</h3>
              <p className="text-gray-600 mt-2">
                Magestic.xyz is a modern tool for creating beautiful websites with ease. The platform allows developers and designers to
                collaborate and create websites faster than ever before. It offers advanced tools, templates, and design elements for all
                types of users.
              </p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <Image src="/assets/blog-image/icon1.png" alt="Icon 1" width={50} height={50} />
            <Image src="/assets/blog-image/icon2.png" alt="Icon 2" width={50} height={50} />
            <Image src="/assets/blog-image/icon3.png" alt="Icon 3" width={50} height={50} />
            <Image src="/assets/blog-image/icon4.png" alt="Icon 4" width={50} height={50} />
            <Image src="/assets/blog-image/icon5.png" alt="Icon 5" width={50} height={50} />
            <Image src="/assets/blog-image/icon6.png" alt="Icon 6" width={50} height={50} />
          </div>
        </InView>

        {/* Quotation Section */}
        <InView
          as="section"
          id="other-resources"
          onChange={(inView) => { if (inView) setActiveLink("other-resources"); }}
        >
          <blockquote className="text-lg text-gray-800 italic">
            In a world older and more complex than ours they move finished and complete, gifted with dimensions of the senses we have
            never attained, trying to voice what shall never have!
          </blockquote>
          <footer className="mt-4 text-gray-600">— <strong>Daniel Bregman</strong></footer>
        </InView>

        {/* Software and Tools Section */}
        <InView
          as="section"
          id="consultations"
          onChange={(inView) => { if (inView) setActiveLink("consultations"); }}
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
