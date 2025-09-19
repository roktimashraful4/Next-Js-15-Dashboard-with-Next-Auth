"use client";

import { User } from "@/hooks/useUser";
import { motion, AnimatePresence } from "framer-motion";
import { JSX } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}

export default function UserModal({ isOpen, onClose, user }: Props): JSX.Element {
  return (
    <AnimatePresence>
      {isOpen && user && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Content */}
          <motion.div
            className="bg-gray-900 text-gray-100 rounded-2xl shadow-2xl w-[420px] max-w-full p-6 relative border border-gray-800"
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 transition"
            >
              ✕
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-lg font-bold">
                {user.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-sm text-gray-400">ID: {user.id}</p>
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <span className="text-gray-400">📧</span>
                <span className="text-sm">{user.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gray-400">🏢</span>
                <span className="px-2 py-1 bg-gray-800 rounded text-sm">
                  {user.company?.name ?? "N/A"}
                </span>
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white text-sm transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
