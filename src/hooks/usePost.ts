import { useFetch } from "./useFetch";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export function usePosts(url: string = "https://jsonplaceholder.typicode.com/posts") {
  return useFetch<Post[]>(url);
}
