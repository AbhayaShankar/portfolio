import React, { Fragment } from "react";
// import PostGrid from "../../components/posts/PostGrid";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-utils";
import Head from "next/head";

const AllPostsPage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>Blogs - Abhaya Shankar</title>
        <meta name="description" content="Blogs by Abhaya Shankar" />
      </Head>
      <AllPosts posts={posts} />;
    </Fragment>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
