// components/PostDetail.tsx
"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useFetch } from "@/hooks/useFetch";
import type { Post } from "@/hooks/usePost";

export default function PostDetail({ id }: { id: string }) {
  const router = useRouter();
  const { data: post, loading, error } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!post) return <p className="text-gray-500">No post found.</p>;

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 mb-6 text-slate-300 hover:text-slate-100 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to posts</span>
      </button>
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
