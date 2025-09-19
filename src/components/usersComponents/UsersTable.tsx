
import { User } from "@/hooks/useUser";
import UserRow from "./UserRow";
import { JSX } from "react";

interface Props {
  users: User[];
  onRowClick: (user: User) => void;
}

export default function UsersTable({ users, onRowClick }: Props): JSX.Element {
  return (
    <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-800 bg-gray-900">
      <table className="w-full text-left border-collapse">
        {/* Sticky Header */}
        <thead className="sticky top-0 bg-gray-800 text-gray-300 uppercase text-xs tracking-wider z-10">
          <tr>
            <th className="px-6 py-4 font-semibold">Name</th>
            <th className="px-6 py-4 font-semibold">Email</th>
            <th className="px-6 py-4 font-semibold">Company</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-gray-800">
          {users.map((u) => (
            <UserRow key={u.id} user={u} onClick={() => onRowClick(u)} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
