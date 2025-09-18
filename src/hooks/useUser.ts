import { useFetch } from "./useFetch";

export interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
}

export function useUsers() {
  return useFetch<User[]>("https://jsonplaceholder.typicode.com/users");
}