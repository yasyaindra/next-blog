import React, { useState } from "react";
import ProfileImage from "../components/ProfileImage";
import Posts from "../components/Posts";
import Loading from "./loading";

const Blog = () => {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <Posts />
    </div>
  );
};

export default Blog;
