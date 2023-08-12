import React, { Fragment } from "react";
import ContactForm from "../components/contact/ContactForm";
import Head from "next/head";

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
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;
