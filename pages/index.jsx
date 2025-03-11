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
        <title>
          Abhaya Shankar - React/Next.js Full Stack Developer - India
        </title>
        <meta
          name="description"
          content="Abhaya Shankar is an India-based Full Stack Developer specializing in
          ReactJS and NextJS. I create responsive web applications with a focus
          on design and user experience. Check out my blogs for web development
          tips and guidance."
        />
        <meta
          name="Abhaya Shankar - Full Stack Developer"
          content="I'm Abhaya, an India based professional Full Stack Developer with over 2 years of experience in ReactJS/NextJS Development. I specialize in creating responsive user interfaces for web-based applications that prioritize design and user experience. I write blogs to help out other developers and guide them on the path to web development."
        />
        <meta
          property="og:title"
          content="Abhaya Shankar - React/Next.js Full Stack Developer"
        />
        <meta
          property="og:image"
          content="https://www.abhayashankar.com/home.png"
        />
        <meta property="og:url" content="https://www.abhayashankar.com" />
        <meta
          name="keywords"
          content="ReactJS, NextJS, Full Stack Developer, Web Development, India, Responsive Design, User Experience, JavaScript, Front-end Developer, Back-end Developer, UI/UX, Portfolio, Blog, Web Applications, Abhaya Shankar"
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
