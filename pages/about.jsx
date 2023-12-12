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
        <meta property="og:title" content={"Abhaya Shankar - About"} />
        {/* Change the Image here for preview... */}
        <meta
          property="og:image"
          content={`https://www.abhayashankar.com/about.png`}
        />
        <meta
          property="og:url"
          content={`https://www.abhayashankar.com/about`}
        />
      </Head>
      <About />
    </Fragment>
  );
};

export default about;
