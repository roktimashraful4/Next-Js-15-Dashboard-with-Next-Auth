"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Home, LogIn, Newspaper, Users } from "lucide-react";
import NavItem from "./UI/NavItem";
import Image from "next/image";
import Link from "next/link";
interface SidebarProps {
  isOpen: boolean;
  session: {
    user?: { name?: string | null | undefined; email?: string | null | undefined; image?: string | null | undefined; }
  } | null | undefined;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, session, setIsOpen }: SidebarProps) {
  console.log(session);
  
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
          <NavItem text="Home" href="/" icon={<Home size={20} />} isActive={!isOpen} isCollapsed={isOpen} />
          <NavItem text="Posts" href="/posts" icon={<Newspaper size={20} />} isCollapsed={isOpen} />
          <NavItem text="Users" href="/users" icon={<Users size={20} />} isCollapsed={isOpen} />
        </nav>
      {/* button logout */}
        <button
         title="Logout"
          onClick={() => setIsOpen(true)}
          className={
            `flex items-center ${isOpen ? "justify-center" : "justify-start"} gap-2 w-full p-4 border-t border-gray-800 hover:bg-gray-800 transition-colors duration-300`
          }
        >
          {
            session?.user?.name ? (
            <Link href="/profile" className="flex items-center gap-2">
              {/* profile pic */}
              <Image
                src={session.user.image || '/default-profile.png'}
                width={32}
                height={32}
                alt={session.user.name || "Profile Picture"}
                className="rounded-full"
              />
              { !isOpen &&
                <div className="flex flex-col leading-tight items-start">
                  <h3 className="text-sm font-medium text-white"> {session.user.name} </h3>
                  <p className="text-xs text-gray-400"> {session.user.email} </p>
                </div> 
              }
            </Link>
            ) : null
          }
          {
            !session && (
            <Link href="/login">
              <LogIn size={20} /> {!isOpen && <span>Login</span>}
            </Link>
            )
          }
        </button>
      </motion.aside>
      

    </AnimatePresence>
  );
}
