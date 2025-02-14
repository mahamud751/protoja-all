import * as React from 'react';

export default function Pagination() {
  return (
    <div className="flex justify-between items-center p-4">
      {/* Previous Button */}
      <button className="px-4 py-2 bg-white text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition">
        Previous
      </button>

      {/* Pagination Numbers */}
      <div className="flex items-center space-x-1">
        <button className="px-3 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-purple-600 hover:text-white transition">
          1
        </button>
        <button className="px-3 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-purple-600 hover:text-white transition">
          2
        </button>
        <button className="px-3 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-purple-600 hover:text-white transition">
          3
        </button>
        <span className="px-3 py-2 text-gray-700">...</span>
        <button className="px-3 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-purple-600 hover:text-white transition">
          8
        </button>
        <button className="px-3 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-purple-600 hover:text-white transition">
          9
        </button>
        <button className="px-3 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-purple-600 hover:text-white transition">
          10
        </button>
      </div>

      {/* Next Button */}
      <button className="px-4 py-2 bg-white text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition">
        Next
      </button>
    </div>
  );
}
