import UsersClient from "@/components/usersComponents/UsersClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users | Dashboard",
  description: "Browse and view user details with a modern UI and animations.",
};

export default function UsersPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <UsersClient />
    </div>
  );
}
