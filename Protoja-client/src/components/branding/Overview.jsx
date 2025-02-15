import Image from "next/image";


export default function Overview() {
  return (
    <div className="bg-white text-black py-10 px-6 md:px-10 flex flex-col md:flex-row max-w-7xl mx-auto">
      
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 space-y-4 text-gray-700 text-sm">
        <div>
          <p className="font-semibold">Industry</p>
          <p>Health</p>
        </div>
        <div>
          <p className="font-semibold">Headquarters</p>
          <p>London, UK</p>
        </div>
        <div>
          <p className="font-semibold">Company Size</p>
          <p>10+ employees</p>
        </div>
        <div>
          <p className="font-semibold">Services</p>
          <p>Branding</p>
          <p>UX Design</p>
          <p>UI Design</p>
          <p>App Design</p>
          <p>UX Research</p>
          <p>User Research</p>
        </div>
        <div>
          <p className="font-semibold">Website</p>
          <a href="#" className="text-blue-600 hover:underline">Visit their website</a>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-3/4 md:pl-10 space-y-8">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="text-gray-700 mt-2">
            MyHydration is a mobile app designed to help users stay hydrated by tracking their
            water intake and achieving daily hydration goals. It offers intuitive features such as
            progress visualization, smart reminders, and educational content, making hydration
            tracking simple and engaging.
          </p>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="text-2xl font-bold">Challenges</h2>
          <p className="text-gray-700 mt-2">
            The problem is Costwise previously had an unorganized management system.
            Navigating was much more complex, and UI was one of the issues. Besides this,
            the previous one didn’t have any AI-bot, which we had to maintain.
          </p>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-bold">Solution</h2>
          <p className="text-gray-700 mt-2">
            Firstly, we researched the whole project from the root and tried to understand the
            users' pain points. We worked on UI and colors, and focused on UX. We introduced
            the AI-bot system and a dynamic calendar. We also reduced repetitive actions and
            introduced global search and an advanced filter system.
          </p>
        </section>

        {/* Testimonial Section */}
        <section className="bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          {/* Video Thumbnail */}
          <div className="relative w-72 h-56">
            <Image
              src="/assets/branding/overview-video.png"
              alt="Testimonial Video"
              width={350}
              height={240}
              className="rounded-lg w-full h-full"
            />
            {/* <AiFillPlayCircle className="absolute inset-0 top-10 text-orange-500 text-6xl cursor-pointer" /> */}
          </div>

          {/* Review Content */}
          <div className="text-gray-700 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">Reviewed on</span>
              <span className="text-red-500 font-semibold">Clutch ★★★★★</span>
            </div>
            <p className="text-lg font-semibold mt-3">
              We were extremely impressed with how they approached teamwork,
              how they took feedback on board, and how responsive they were
              throughout the process.
            </p>
            <p className="text-sm font-semibold mt-4">Pinto Allen</p>
            <p className="text-xs text-gray-500">Founder & CEO, Cyber Networks</p>
          </div>
        </section>

      </div>
    </div>
  );
}
