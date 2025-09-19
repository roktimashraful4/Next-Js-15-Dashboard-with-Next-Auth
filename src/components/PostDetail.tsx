"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { Post } from "@/hooks/usePost";

export default function PostDetail({ id }: { id: string }) {
  const router = useRouter();
  const [simulateError, setSimulateError] = useState(false);

  const url = simulateError
    ? `https://jsonplaceholder.typicode.com/invalid-posts/${id}` // ❌ intentional error
    : `https://jsonplaceholder.typicode.com/posts/${id}`;

  const { data: post, loading, error, refetch } = useFetch<Post>(url);

  if (loading) {
    return (
      <p className="text-gray-500 dark:text-gray-400 animate-pulse">
        Loading post...
      </p>
    );
  }

  if (error) {
    return (
      <div className="max-w-xl mx-auto mt-6 bg-gray-900 border border-red-600 text-red-400 p-6 rounded-xl shadow-md text-center">
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

  if (!post) {
    return <p className="text-gray-500 dark:text-gray-400">No post found.</p>;
  }

  return (
    <div>
      {/* Top Bar with Back + Simulate Error */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-slate-300 hover:text-slate-100 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to posts</span>
        </button>

        <button
          onClick={() => setSimulateError(true)}
          className="px-3 py-1 bg-yellow-600 hover:bg-yellow-500 rounded-lg text-white text-xs transition"
        >
          Simulate Error
        </button>
      </div>

      {/* Post Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg"
      >
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {post.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {post.body}
        </p>
      </motion.div>
    </div>
  );
}
