"use client";
import {   Sidebar, SidebarClose} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  isOpen: boolean;
  session: {
    user?: { name?: string | null | undefined; email?: string | null | undefined; image?: string | null | undefined; }
  } | null | undefined;
  setIsOpen: (open: boolean) => void;
}

export default function Navbar({ isOpen, session, setIsOpen }: NavbarProps) {
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
        {
          session?.user?.name ?  
          <Link  href="/profile" className=" flex items-center gap-2 ">Hello, {session?.user?.name} 
             <Image
                src={session.user.image || '/default-avatar.png'}
                alt="profile"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
          </Link>
          :
          <Link href="/login" className="text-sm bg-purple-600 text-white px-3 py-1.5 rounded-lg hover:bg-purple-500 transition">Login</Link>

        }

        
      </div>
    </header>
  );
}
