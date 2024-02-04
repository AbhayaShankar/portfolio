import React from "react";
import PostItem from "./PostItem";
import classes from "./PostGrid.module.css";

const PostGrid = ({ posts }) => {
  console.log(posts);

  const isPublishedBlog = posts.filter((post) => post.isPublished);
  const isNotPublishedBlog = posts.filter((post) => !post.isPublished);
  const featuredPostArray = [...isNotPublishedBlog, ...isPublishedBlog];

  return (
    <ul className={classes.grid}>
      {featuredPostArray.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;
