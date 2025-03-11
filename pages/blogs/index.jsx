import React, { Fragment } from "react";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-utils";
import Head from "next/head";

const AllPostsPage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>
          Blogs by Abhaya Shankar - Web Development, UI/UX, ReactJS, NextJS, and
          More Blogs...
        </title>
        <meta
          name="description"
          content="Explore Abhaya Shankar's web development blog for insights, tutorials, and tips on ReactJS, NextJS, JavaScript, and more. Stay updated with the latest trends and best practices in web development."
        />
        <meta
          name="keywords"
          content="ReactJS, NextJS, JavaScript, Web Development, Blog, Tutorials, Tips, Front-end Development, Abhaya Shankar"
        />
        <meta
          property="og:title"
          content="Abhaya Shankar's Web Development Blog"
        />
        <meta
          property="og:description"
          content="Explore Abhaya Shankar's web development blog for insights, tutorials, and tips on ReactJS, NextJS, JavaScript, and more."
        />
        <meta
          property="og:image"
          content="https://www.abhayashankar.com/blog.jpg"
        />
        <meta property="og:url" content="https://www.abhayashankar.com/blogs" />
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
