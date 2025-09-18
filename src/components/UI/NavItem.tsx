import React from "react";
import { motion } from "framer-motion";

interface NavItemProps {
  text: string;
  href: string;
  icon: React.ReactNode;
  isActive?: boolean;
  isCollapsed?: boolean;
}

const NavItem = ({ text, href, icon, isActive, isCollapsed }: NavItemProps) => {
  return (
    <a
      href={href}
      title={text}
      className={`group flex items-center ${
        isCollapsed ? "justify-center" : "gap-3"
      } px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300
        ${
          isActive
            ? "bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-900"
            : "text-gray-400 hover:bg-gray-800 hover:text-white dark:text-gray-400 dark:hover:bg-gray-200 dark:hover:text-gray-900"
        }`}
    >
      {/* Icon always visible */}
      <span
        className={`text-lg transition-transform duration-200 group-hover:scale-110`}
      >
        {icon}
      </span>

      {/* Text shows only if sidebar is not collapsed */}
      {!isCollapsed && (
        <motion.span
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -5 }}
          transition={{ duration: 0.2 }}
          className="whitespace-nowrap font-bold"
        >
          {text}
        </motion.span>
      )}
    </a>
  );
};

export default NavItem;
