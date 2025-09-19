"use client";

import { useModal } from "@/hooks/useModal";
import { User, useUsers } from "@/hooks/useUser";
import { JSX, useState } from "react";
import UsersTable from "./UsersTable";
import UserModal from "./UserModal";
import ShimmerTable from "../ShimmerTable";

export default function UsersClient(): JSX.Element {
  const { data: users, loading, error } = useUsers();
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (loading) return <ShimmerTable />;
  if (error) return <p className="text-red-500">Failed to load users</p>;

  function handleRowClick(user: User) {
    setSelectedUser(user);
    openModal();
  }

  return (
    <>
      {users && <UsersTable users={users} onRowClick={handleRowClick} />}
      <UserModal isOpen={isOpen} onClose={closeModal} user={selectedUser} />
    </>
  );
}
