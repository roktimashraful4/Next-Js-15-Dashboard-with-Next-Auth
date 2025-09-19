"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface PostCardProps {
  id: number;
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, body }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -6 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group  border border-slate-600 rounded-sm shadow-lg hover:shadow-2xl overflow-hidden flex flex-col justify-between h-[280px] w-full"
    >
      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200 line-clamp-2 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 flex-grow">
          {body}
        </p>
      </div>

      {/* Footer with Link */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="p-4 border-t border-gray-100 dark:border-gray-700"
      >
        <Link
          href={`/posts/${id}`}
          className="text-slate-100 font-medium hover:text-blue-700 transition"
        >
          Read More →
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default PostCard;
