"use client";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { useState, useEffect } from "react";
import CategoryTabs from "./CategoryTabs"; // Import the CategoryTabs component
import axios from "axios"; // Axios for making the API call

export default function BlogCard() {
  const [blogData, setBlogData] = useState([]); // State for blog data
  const [filteredData, setFilteredData] = useState([]); // State for filtered data
  const [activeCategory, setActiveCategory] = useState("View all"); // Active category

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8002/api/blogs");
        setBlogData(response.data); // Set the blog data from API
        setFilteredData(response.data); // Initially, show all data
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, []);

  // Handle category changes and filter the data
  const handleTabChange = (category) => {
    setActiveCategory(category);
    if (category === "View all") {
      setFilteredData(blogData); // Show all data if "View all" is selected
    } else {
      // Filter the data based on the selected category
      const filtered = blogData.filter(
        (blog) => blog.type === category.toLowerCase().replace(" ", "-")
      );
      setFilteredData(filtered);
    }
  };

  return (
    <>
      {/* Category Tabs */}
      <CategoryTabs onTabChange={handleTabChange} />

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {filteredData?.map((card) => (
          <div
            key={card._id}
            className="rounded-lg overflow-hidden shadow-lg bg-white"
          >
            {/* Image with Next.js Image component */}
            <div className="relative w-full h-48">
              <Image
                src={card.photos[0]} // Display the first image from the 'photos' array
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Content */}
            <div className="p-3">
              <div className="flex justify-between">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {card.title}
                </h2>
                <MdArrowOutward size={20} className="text-black" />
              </div>
              <p className="text-gray-600 mt-2 text-sm">{card.desc}</p>
            </div>

            {/* Author and Date */}
            <div className="p-3 text-gray-600 text-xs border-t border-gray-200">
              <div>
                <span>{card.author}</span>
              </div>
              <div>
                <span>{new Date(card.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
