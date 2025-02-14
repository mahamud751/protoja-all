import * as React from 'react';
import Image from 'next/image';

export default function BlogDetailsHero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-10 rounded-xl shadow-lg">
      {/* Left Side Content */}
      <div className="">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          How collaboration makes us better designers
        </h1>
        <p className="text-base md:text-lg font-medium text-gray-700 mt-4">
          Collaboration can make our teams stronger, and our individual designs better. Here’s how to do it well.
        </p>

        {/* Author Information */}
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
            <div>Published 14 Jan 2024</div>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="relative mt-6 md:mt-0 ">
        <Image
          src="/assets/blog-image/Blog-hero.png"
          alt="AI Plugins for UI/UX Design"
          layout="intrinsic"
          width={400}
          height={400}
          className="rounded-lg shadow-md w-full"
        />
        <div className="absolute bottom-4 right-4 text-xl text-gray-600">
          <span className="inline-block rotate-45">↗</span> {/* Swipe Icon */}
        </div>
      </div>
    </div>
  );
}
