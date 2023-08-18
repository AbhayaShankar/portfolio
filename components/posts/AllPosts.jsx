import classes from "./AllPosts.module.css";
import PostGrid from "./PostGrid";

function AllPosts({ posts }) {
  return (
    <section className={classes.posts}>
      <h1>Blogs</h1>
      <PostGrid posts={posts} />
    </section>
  );
}

export default AllPosts;
