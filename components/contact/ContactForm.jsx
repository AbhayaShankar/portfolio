import React, { useState } from "react";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [emailVal, setEmailVal] = useState("");
  const [nameVal, setNameVal] = useState("");
  const [messageVal, setMessageVal] = useState("");

  const sendMessageHandler = (e) => {
    e.preventDefault();
    // console.log(emailVal, nameVal, messageVal);

    // client side validation...

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: emailVal,
        name: nameVal,
        message: messageVal,
      }),

      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <section className={classes.contact}>
      <h2>Contact Form</h2>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={emailVal}
              onChange={(e) => setEmailVal(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={nameVal}
              onChange={(e) => setNameVal(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            required
            value={messageVal}
            onChange={(e) => setMessageVal(e.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
