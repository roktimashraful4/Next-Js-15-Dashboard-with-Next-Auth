"use client";

import { useFetch } from "./useFetch";

export interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
}

export function useUsers(simulateError = false) {
  const url = simulateError
    ? "https://jsonplaceholder.typicode.com/invalid-users" // ❌ intentional error
    : "https://jsonplaceholder.typicode.com/users";

  // useFetch will return { data, loading, error, refetch }
  return useFetch<User[]>(url);
}
