"use client";
import { usePosts } from '@/hooks/usePost';
import React  from 'react'
import PostCard from '../PostCard';
import PostCardShimmer from '../PostCardShimmer';


const PostList = ()  => {
  const { data: posts, loading, error } = usePosts();
  console.log(posts);
  
  if (loading) return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index}>
          <PostCardShimmer />
        </div>
      ))}
    </div>);
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts?.map((post) => (
        <div key={post.id}>
          <PostCard id={post.id} title={post.title} body={post.body} />
        </div >
      ))}
    </div>
  );
}

export default PostList;
