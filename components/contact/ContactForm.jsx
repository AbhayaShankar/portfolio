import React, { useEffect, useState } from "react";
import classes from "./ContactForm.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [emailVal, setEmailVal] = useState("");
  const [nameVal, setNameVal] = useState("");
  const [messageVal, setMessageVal] = useState("");
  const [currStatus, setCurrStatus] = useState();
  const [reqError, setReqError] = useState();

  const pendingNotif = (text) => toast(text);
  const errorNotif = (text) => toast.error(text);
  const successNotif = (text) => toast.success(text);

  useEffect(() => {
    if (currStatus === "success" || currStatus === "error") {
      const timer = setTimeout(() => {
        setCurrStatus(null);
        setReqError(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [currStatus]);

  async function sendMessageHandler(e) {
    e.preventDefault();
    setCurrStatus("pending");

    try {
      const res = await fetch("/api/contact", {
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

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong...");
      }
    } catch (error) {
      setReqError(error.message);
      setCurrStatus("error");
    }

    setCurrStatus("success");
    setEmailVal("");
    setMessageVal("");
    setNameVal("");
  }

  if (currStatus === "pending") {
    pendingNotif("Your data is being submitted!");
  }

  if (currStatus === "success") {
    successNotif("Your message has been sent successfully!");
  }

  if (currStatus === "error") {
    errorNotif(reqError);
  }

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

      <ToastContainer
        style={{ fontSize: 12 }}
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default ContactForm;
