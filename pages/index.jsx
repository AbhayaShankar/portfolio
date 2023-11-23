import React, { Fragment } from "react";
import Hero from "../components/HomePage/Hero";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";
import { getFeaturedPosts } from "../lib/posts-utils";
import Head from "next/head";
import FeaturedProject from "../components/Project/FeaturedProject";

const HomePage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>Abhaya Shankar</title>
        <meta
          name="description"
          content="I'm Abhaya, an India based professional Frontend Developer with over 2 years of experience in ReactJS/NextJS Development. I specialize in creating responsive user interfaces for web-based applications that prioritize design and user experience. I write blogs to help out other developers and guide them on the path to web development."
        />
      </Head>
      <Hero />
      <FeaturedProject />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 6000,
  };
}

export default HomePage;
