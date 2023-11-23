import React, { Fragment } from "react";
import About from "../components/About/About";
import Head from "next/head";

const about = () => {
  return (
    <Fragment>
      <Head>
        <title>About - Abhaya Shankar</title>
        <meta
          name="About - Abhaya"
          content="Abhaya Shankar Portfolio - Subscribe to the blog app so that you never miss any latest blog."
        />
      </Head>
      <About />
    </Fragment>
  );
};

export default about;
