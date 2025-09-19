"use client";

import { logout } from "@/utils/actions";
import { LogOut } from "lucide-react";
import { useState } from "react";

export const SignOutButton = () => {
    const [loading, setLoading] = useState(false);
    const handleSignOut = async () => {
        setLoading(true);
        try {
            await logout();
        } catch (error) {
            setLoading(false);
            console.error('Error signing out:', error);
        }
    };

  return (
    <button
      onClick={() => handleSignOut()} 
      disabled={loading}
      className="flex items-center gap-2 justify-center cursor-pointer my-4 px-2 py-2.5 rounded-lg bg-red-600 text-white font-medium shadow-md 
                 hover:bg-red-500 hover:shadow-lg 
                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 
                 dark:focus:ring-offset-gray-900 
                 transition-all duration-200"
    >
     <LogOut size={20} />
        {loading ? 'Signing Out...' : 'Sign Out'}
    </button>
  );
};
