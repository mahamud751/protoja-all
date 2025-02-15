import { AiOutlineArrowLeft, AiOutlineArrowRight,  } from 'react-icons/ai'; // Importing the arrow icon
import BlogCard from '../blogs/BlogCard';

export default function LatestBlogs() {
  return (
 <>
    <div className="flex justify-between items-center bg-white border border-gray-200 p-6 rounded-lg shadow-md">
      {/* Left Content */}
      <div>
        <p className="text-orange-600 font-semibold text-sm">Latest posts</p>
        <h1 className="text-3xl font-bold text-gray-900">Protoja Blog</h1>
        <p className="text-gray-600">Interviews, tips, guides, industry best practices</p>
      </div>

      {/* View All Button */}
      <button className="flex items-center gap-2 bg-orange-500 text-black px-4 py-2 rounded-full hover:bg-orange-600 transition">
        View all posts <AiOutlineArrowLeft size={18} />
      </button>
    </div>
  <BlogCard/>

  {/* Slider Section */}
  <div className="flex space-x-4 mb-3">
      {/* Left Arrow Button */}
      <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition">
      <AiOutlineArrowLeft size={18} className="text-gray-600" />
    
      </button>

      {/* Right Arrow Button */}
      <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition">
        <AiOutlineArrowRight size={18} className="text-gray-600" />
      </button>
    </div>
 </>
  );
}
