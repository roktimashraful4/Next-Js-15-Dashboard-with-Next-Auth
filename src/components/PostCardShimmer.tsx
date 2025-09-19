"use client";

import React from "react";

const PostCardShimmer: React.FC = () => {
  return (
    <div className="border rounded-sm p-5 shadow-md bg-white dark:bg-gray-900 animate-pulse h-[280px] flex flex-col justify-between">
      {/* Title Placeholder */}
      <div className="space-y-2">
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
      </div>

      {/* Body Placeholder */}
      <div className="space-y-2 mt-4 flex-grow">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
      </div>

      {/* Footer Placeholder */}
      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-24 mt-4"></div>
    </div>
  );
};

export default PostCardShimmer;