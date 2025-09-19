import { User } from "@/hooks/useUser";
import { JSX } from "react";


interface Props {
  user: User;
  onClick: () => void;
}

export default function UserRow({ user, onClick }: Props): JSX.Element {
  return (
    <tr
      onClick={onClick}
      className="cursor-pointer hover:bg-gray-800/60 transition-colors duration-300"
    >
      <td className="px-6 py-4 text-sm font-medium text-gray-100">
        {user.name}
      </td>
      <td className="px-6 py-4 text-sm text-gray-400">{user.email}</td>
      <td className="px-6 py-4 text-sm text-gray-300">{user.company?.name}</td>
    </tr>
  );
}
