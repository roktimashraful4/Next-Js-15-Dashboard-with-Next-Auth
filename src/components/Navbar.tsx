"use client";
import {  Sidebar, SidebarClose} from "lucide-react";
import Image from "next/image";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  return (
    <header className="flex items-center justify-between shadow px-4 py-3">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer"
        >
            {isOpen ? <Sidebar size={24} /> : <SidebarClose size={24} /> }
        </button>
        <h1 className="text-lg font-semibold ">Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <span className="">Hello, User</span>
        <Image
          src="https://i.pravatar.cc/40"
          alt="profile"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}
