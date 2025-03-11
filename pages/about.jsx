import React, { Fragment } from "react";
import About from "../components/About/About";
import Head from "next/head";

const about = () => {
  return (
    <Fragment>
      <Head>
        <title>
          About - Abhaya Shankar, Full Stack Developer and Web Development
          Expert
        </title>
        <meta
          name="description"
          content="Learn more about Abhaya Shankar, an India-based Full Stack Developer specializing in ReactJS and NextJS. Discover my experience, skills, and projects in web development."
        />
        <meta
          name="keywords"
          content="Abhaya Shankar, Full Stack Developer, ReactJS, NextJS, Web Development, India, Portfolio, JavaScript, Front-end Developer, Back-end Developer"
        />
        <meta
          property="og:title"
          content="About Abhaya Shankar - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Learn more about Abhaya Shankar, an India-based Full Stack Developer specializing in ReactJS and NextJS. Discover my experience, skills, and projects in web development."
        />
        <meta
          property="og:image"
          content="https://www.abhayashankar.com/about.png"
        />
        <meta property="og:url" content="https://www.abhayashankar.com/about" />
      </Head>
      <About />
    </Fragment>
  );
};

export default about;
