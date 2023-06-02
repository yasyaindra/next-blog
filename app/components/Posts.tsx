import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";
import { useState } from "react";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section className="mt-6">
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
