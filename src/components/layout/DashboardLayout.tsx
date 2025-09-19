"use client";

import { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const session = useSession();

  return (
      <div className="flex h-screen w-full">
        <Sidebar isOpen={isOpen} session={session.data} setIsOpen={setIsOpen} />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar session={session.data} isOpen={isOpen} setIsOpen={setIsOpen} />

    
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
  );
}
