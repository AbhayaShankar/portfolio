import React, { Fragment } from "react";
import ContactForm from "../components/contact/ContactForm";
import Head from "next/head";
import Wrapper from "../components/Wrapper/Wrapper";

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Contact - Abhaya Shankar, Reach Out for Web Development Projects and
          Inquiries
        </title>
        <meta
          name="description"
          content="Contact Abhaya Shankar for web development projects, business ventures, and JavaScript discussions. Reach out with your inquiries or feedback, and I'll respond as soon as possible."
        />
        <meta
          name="keywords"
          content="Contact, Abhaya Shankar, Web Development, ReactJS, NextJS, JavaScript, Projects, Business Ventures, Inquiries, Feedback"
        />
        <meta
          property="og:title"
          content="Contact Abhaya Shankar - Web Development Inquiries"
        />
        <meta
          property="og:description"
          content="Contact Abhaya Shankar for web development projects, business ventures, and JavaScript discussions. Reach out with your inquiries or feedback, and I'll respond as soon as possible."
        />
        <meta
          property="og:image"
          content="https://www.abhayashankar.com/contact.jpg"
        />
        <meta
          property="og:url"
          content="https://www.abhayashankar.com/contact"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Abhaya Shankar",
              "description": "Contact Abhaya Shankar for web development projects, business ventures, and JavaScript discussions.",
              "url": "https://www.abhayashankar.com/contact"
            }
          `}
        </script>
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
