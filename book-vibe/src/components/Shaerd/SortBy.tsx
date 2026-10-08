"use client";

import { useState } from "react";

const SortBy = () => {
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setSortOpen(!sortOpen)}
        className="btn btn-success btn-sm text-white"
      >
        Sort By
        <span>⌄</span>
      </button>

      {sortOpen && (
        <div className="absolute left-0 z-50 mt-1 w-32 rounded-md bg-white py-2 shadow-md">
          <button className="block w-full px-3 py-1 text-left text-xs hover:bg-gray-100">
            Rating
          </button>

          <button className="block w-full px-3 py-1 text-left text-xs hover:bg-gray-100">
            Number of pages
          </button>

          <button className="block w-full px-3 py-1 text-left text-xs hover:bg-gray-100">
            Publisher year
          </button>
        </div>
      )}
    </div>
  );
};

export default SortBy;