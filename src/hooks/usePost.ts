import { useFetch } from "./useFetch";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export function usePosts() {
  return useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");
}
