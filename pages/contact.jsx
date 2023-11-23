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
          name="Contact - Abhaya Shankar"
          content="Abhaya Shankar Portfolio - Subscribe to the blog app so that you never miss any latest blog."
        />
      </Head>
      <Wrapper
        title={"Contact"}
        desc={`You can contact me via my social handles,  I am open to discussing various projects and business ventures. Feel free to initiate a conversation with a simple 'Hi/Hello' and we can delve into topics related to JavaScript and the world around it. Your feedback is also valuable to me, leave your message here and I will get to you as soon as possible. ☻`}
      >
        <ContactForm />
      </Wrapper>
    </Fragment>
  );
};

export default ContactPage;
