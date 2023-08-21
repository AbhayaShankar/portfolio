import React, { Fragment } from "react";
import ContactForm from "../components/contact/ContactForm";
import Head from "next/head";
import Wrapper from "../components/Wrapper/Wrapper";

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact - Abhaya Shankar</title>
        <meta
          name="description"
          content="Abhaya Shankar Portfolio - Subscribe to the blog app so that you never miss any latest blog."
        />
      </Head>
      <Wrapper
        title={"Contact"}
        desc={`You can contact me via my social handles and also feel free to talk
          about projects and ventures. Drop a Hi! to connect and we can discuss
          all about javascript and the world around it. Any Feedbacks for me...
          Drop your message here.`}
      >
        <ContactForm />
      </Wrapper>
    </Fragment>
  );
};

export default ContactPage;
