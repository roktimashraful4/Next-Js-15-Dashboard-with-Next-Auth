"use client";

import { useModal } from "@/hooks/useModal";
import { User, useUsers } from "@/hooks/useUser";
import { JSX, useState } from "react";
import ShimmerTable from "../ShimmerTable";
import ErrorMessage from "../ErrorMessage";
import UsersTable from "./UsersTable";
import UserModal from "./UserModal";

export default function UsersClient(): JSX.Element {
  const [simulateError, setSimulateError] = useState(false);
  const { data: users, loading, error } = useUsers(simulateError);
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (loading) return <ShimmerTable />;

  if (error) {
    return (
      <ErrorMessage
        message="Failed to load users."
        onRetry={() => setSimulateError(false)}
      />
    );
  }

  function handleRowClick(user: User) {
    setSelectedUser(user);
    openModal();
  }

  return (
    <>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setSimulateError(true)}
          className="px-4 py-2 bg-yellow-600 hover:bg-yellow-500 rounded-lg text-white text-sm transition"
        >
          Simulate Error
        </button>
      </div>

      {users && <UsersTable users={users} onRowClick={handleRowClick} />}

      <UserModal isOpen={isOpen} onClose={closeModal} user={selectedUser} />
    </>
  );
}
