// components/Sidebar.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Settings, Users, MessageSquare, BarChart, HelpCircle, LogOut } from "lucide-react";
import NavItem from "./UI/NavItem";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.aside
        key={isOpen ? "expanded" : "collapsed"}
        initial={{ width: isOpen ? 64 : 256 }}
        animate={{ width: isOpen ? 64 : 256 }}
        exit={{ width: isOpen ? 64 : 256 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="h-screen bg-gray-900 text-gray-200 shadow-lg fixed md:static inset-y-0 left-0 z-50 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          {!isOpen ? (
            <motion.h2
              key="title"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="text-xl font-bold text-white"
            >
              Dashboard
            </motion.h2>
          ):
           <motion.h2
              key="title"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="text-xl font-bold text-white"
            >
              D
            </motion.h2>
          }
        </div>

        {/* Nav Items */}
        <nav className="p-4 space-y-2 flex-1">
          <NavItem text="Home" href="#" icon={<Home size={20} />} isActive={!isOpen} isCollapsed={isOpen} />
          <NavItem text="Profile" href="#" icon={<Users size={20} />} isCollapsed={isOpen} />
          <NavItem text="Settings" href="#" icon={<Settings size={20} />} isCollapsed={isOpen} />
          <NavItem text="Messages" href="#" icon={<MessageSquare size={20} />} isCollapsed={isOpen} />
          <NavItem text="Analytics" href="#" icon={<BarChart size={20} />} isCollapsed={isOpen} />
          <NavItem text="Help" href="#" icon={<HelpCircle size={20} />} isCollapsed={isOpen} />
        </nav>
      {/* button logout */}
        <button
         title="Logout"
          onClick={() => setIsOpen(true)}
          className={
            `flex items-center ${isOpen ? "justify-center" : "justify-start"} gap-2 w-full p-4 border-t border-gray-800 hover:bg-gray-800 transition-colors duration-300`
          }
        >
          <LogOut size={20} /> {!isOpen && <span>Logout</span>}
        </button>
      </motion.aside>
      

    </AnimatePresence>
  );
}
