import Wavy from "../Wrapper/Wavy";
import classes from "./AllPosts.module.css";
import PostGrid from "./PostGrid";

function AllPosts({ posts }) {
  return (
    <section className={classes.posts}>
      <h1>Blogs</h1>
      <p className={classes.blogdesc}>
        To help other developers comprehend the concepts, I like to document my
        learnings, by writing articles about the technologies, frameworks, and
        the projects I build.
      </p>
      <Wavy />
      <PostGrid posts={posts} />
    </section>
  );
}

export default AllPosts;
