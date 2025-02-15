import Image from "next/image";
import UserCentricDesign from "./UserCentricDesign";
import Faq from "./Faq";
import Overview from "./Overview";

export default function Branding() {
  return (
    <>
      {/* Branding Section */}
      <div className="bg-white text-center py-10">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Branding and Mobile app for <br className="hidden md:block" /> myHydration Platform
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Healthcare - Mobile App Design
        </p>

        {/* Hero Image */}
        <div className="mt-6">
          <Image
            src="/assets/branding/branding-hero.png" 
            alt="Mobile App Design"
            width={600}
            height={400}
            className="rounded-lg  w-full "
          />
        </div>
      </div>
      {/* Overview */}
      <Overview/>
      {/* MyHydration Overview Section */}
      <div className="bg-gradient-to-r from-black to-gray-900 text-white py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Section */}
          <div>
            <p className="text-gray-400 text-sm">Overview</p>
            <h1 className="text-5xl md:text-7xl font-extrabold mt-2">
              <span className="text-blue-500">MyHydration</span>
            </h1>
            <p className="text-lg text-gray-300 mt-4 leading-relaxed">
              Stay Refreshed with the Ultimate Hydration Companion! 💧 Track your water intake, 
              get personalized reminders, and build better habits effortlessly.
            </p>
          </div>

          {/* Right Section */}
          <div className="text-gray-400 text-sm space-y-4">
            <div>
              <p className="text-gray-500">Project:</p>
              <p className="text-white">myHydration - Mobile App</p>
            </div>
            <div>
              <p className="text-gray-500">Year:</p>
              <p className="text-white">2024</p>
            </div>
            <p className="text-gray-400 text-sm mt-4 max-w-xs">
              Smart Hydration Tracking Keeps You Refreshed and Healthy Without the Guesswork. 
              Set personalized goals, get timely reminders.
            </p>
          </div>
        </div>
      </div>

      {/* User Centric Design Section */}
      <UserCentricDesign />
      {/* FAQ */}
      <Faq />
    </>
  );
}
