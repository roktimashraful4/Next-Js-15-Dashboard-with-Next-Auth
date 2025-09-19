import type { Metadata } from "next";
import Login from "@/components/Login";

export const metadata: Metadata = {
  title: " Profile | Dashboard",
  description: "Browse and view user details with a modern UI and animations.",
};

export default function ProfilePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">logIn</h1>
      <Login type="google" />
    </div>
  );
}