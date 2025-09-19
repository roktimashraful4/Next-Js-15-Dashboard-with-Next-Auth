"use client";

import React, { useState } from "react";
import PostCard from "../PostCard";
import PostCardShimmer from "../PostCardShimmer";
import { usePosts } from "@/hooks/usePost";

const PostList = () => {
  const [simulateError, setSimulateError] = useState(false);

  const url = simulateError
    ? "https://jsonplaceholder.typicode.com/invalid-posts" // ❌ intentional error
    : "https://jsonplaceholder.typicode.com/posts";

  const { data: posts, loading, error, refetch } = usePosts(url);

  if (loading)
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index}>
            <PostCardShimmer />
          </div>
        ))}
      </div>
    );

  if (error) {
    return (
      <div className="p-6 text-center bg-gray-900 border border-red-600 rounded-xl text-red-400">
        <p className="mb-4 font-medium">⚠️ {error}</p>
        <div className="flex justify-center gap-3">
          <button
            onClick={refetch}
            className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white text-sm transition"
          >
            Retry
          </button>
          <button
            onClick={() => setSimulateError(false)}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm transition"
          >
            Back to Real API
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Toolbar with simulate error button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setSimulateError(true)}
          className="px-3 py-1 bg-yellow-600 hover:bg-yellow-500 rounded-lg text-white text-xs transition"
        >
          Simulate Error
        </button>
      </div>

      {/* Posts grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => (
          <div key={post.id}>
            <PostCard id={post.id} title={post.title} body={post.body} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
