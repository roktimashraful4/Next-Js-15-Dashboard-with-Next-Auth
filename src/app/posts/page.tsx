
import PostList from "@/components/layout/PostList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "A list of posts.",
};


export default function PostsPage() {

  return (
    <>
        <h1 className="text-2xl font-bold">Posts</h1>
        <p className="text-slate-300 my-4">
          Browse through the collection of posts fetched from an external API.
        </p>
        <PostList />
    </>
  );
}