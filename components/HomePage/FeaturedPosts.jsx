import React from "react";
import classes from "./FeaturedPosts.module.css";
import PostGrid from "../posts/PostGrid";

const FeaturedPosts = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Blogs</h2>
      <p className={classes.text}>
        As I delve deeply into blockchain technology, I also like to assist
        other developers.
      </p>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
