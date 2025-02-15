"use client"
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai"; // Dropdown arrow icon

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = useState("View all");

  const categories = ["View all", "Design", "Product Design", "UX Design", "UI Design"];

  return (
    <div className="grid grid-cols-12 border-b border-gray-200 pb-2 mt-3">
      {/* Category Tabs */}
      <div className="col-span-10 flex space-x-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`text-gray-600 pb-2 transition ${activeTab === category ? "text-orange-600 font-semibold border-b-2 border-orange-500" : "hover:text-gray-800"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Dropdown Filter */}
      <div className=" col-span-2 w-full bg-white border border-gray-300 px-4 py-2 rounded-full shadow-sm hover:bg-gray-100 transition">
        <div className="flex justify-between items-center ">
          <button >
            Most recent
          </button>
          <AiOutlineDown />
        </div>
      </div>
    </div>
  );
}
