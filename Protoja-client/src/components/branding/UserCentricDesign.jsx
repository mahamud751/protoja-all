import Image from "next/image";
import { AiFillCheckCircle } from "react-icons/ai";
import MockupImage from "./MockupImage";

export default function UserCentricDesign() {
  const steps = [
    {
      id: 1,
      title: "Research",
      items: ["Understand", "Observe", "Research", "Analysis"],
    },
    {
      id: 2,
      title: "Design",
      items: ["Summary", "Requirements", "Feature priority", "Brand guide"],
    },
    {
      id: 3,
      title: "Prototype",
      items: ["Ideation", "Wireframes", "Visual Research", "Visual Design"],
    },
    {
      id: 4,
      title: "Test",
      items: ["Finalize Design", "Prototype", "Feedback Design"],
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-black to-gray-900 text-white py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Heading & Description */}
          <div className="md:flex justify-between items-start mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">User centric </span>
                <span className="text-blue-500">Design </span>
                Approach
              </h2>
            </div>
            <p className="text-gray-400 max-w-md text-sm mt-4 md:mt-0">
              The design process for MyHydration followed a comprehensive approach,
              ensuring a user-centric, functional, and visually appealing outcome.
              The steps included Understand, Observe, Research, Analysis, Summary,
              Requirements, Feature Priority, Ideation, Wireframes, Visual Research,
              Visual Design, Finalize Design, Prototype, and Iteration.
            </p>
          </div>

          {/* Steps Process (Responsive Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`bg-gray-900 p-6 rounded-xl shadow-lg w-full transform ${
                  index % 2 === 0 ? "lg:translate-y-4" : "lg:-translate-y-4"
                }`}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full">
                    {step.id}
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>
                <ul className="text-gray-400 space-y-2 text-sm">
                  {step.items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <AiFillCheckCircle className="text-gray-500" size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mockup Image */}
    <MockupImage/>
    </>
  );
}
