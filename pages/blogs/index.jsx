import React, { Fragment } from "react";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-utils";
import Head from "next/head";

const AllPostsPage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>Blogs - Abhaya Shankar</title>
        <meta name="description" content="Blogs by Abhaya Shankar" />
        <meta property="og:title" content={"Abhaya Shankar - Blogs"} />
        {/* Change the Image here for preview... */}
        <meta
          property="og:image"
          content={`https://www.abhayashankar.com/blog.jpg`}
        />
        <meta
          property="og:url"
          content={`https://www.abhayashankar.com/blogs`}
        />
      </Head>
      <AllPosts posts={posts} />
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
