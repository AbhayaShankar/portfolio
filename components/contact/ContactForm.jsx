import React, { useContext, useEffect, useState } from "react";
import classes from "./ContactForm.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../../context/context";

const ContactForm = () => {
  const [emailVal, setEmailVal] = useState("");
  const [firstNameVal, setFirstNameVal] = useState("");
  const [lastNameVal, setLastNameVal] = useState("");
  const [numberVal, setNumberVal] = useState("");
  const [messageVal, setMessageVal] = useState("");
  const [currStatus, setCurrStatus] = useState();
  const [reqError, setReqError] = useState();
  const { setIsMenuActive } = useContext(Context);

  const pendingNotif = (text) => toast(text);
  const errorNotif = (text) => toast.error(text);
  const successNotif = (text) => toast.success(text);

  const validPhoneNumber = numberVal.match(/^[6-9]\d{9}$/);

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
          name: firstNameVal + " " + lastNameVal,
          phoneNumber: numberVal,
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
      if (!validPhoneNumber) {
        setCurrStatus("error");
      }
    } catch (error) {
      setReqError(error.message);
      setCurrStatus("error");
    }

    setCurrStatus("success");
    setEmailVal("");
    setMessageVal("");
    setFirstNameVal("");
    setLastNameVal("");
    setNumberVal("");
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
        <div
          className={classes.controls}
          onClick={() => setIsMenuActive(false)}
        >
          <div className={classes.control}>
            <label htmlFor="First Name">First Name</label>
            <input
              type="text"
              id="First Name"
              required
              value={firstNameVal}
              onChange={(e) => setFirstNameVal(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="Last Name">Last Name</label>
            <input
              type="text"
              id="Last Name"
              required
              value={lastNameVal}
              onChange={(e) => setLastNameVal(e.target.value)}
            />
          </div>
        </div>
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
            <label htmlFor="number">Phone Number</label>
            <input
              type="number"
              id="number"
              required
              value={numberVal}
              onChange={(e) => setNumberVal(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control} onClick={() => setIsMenuActive(false)}>
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

        <div className={classes.actions} onClick={() => setIsMenuActive(false)}>
          <button>Send Message</button>
        </div>
      </form>

      <ToastContainer
        style={{ fontSize: 15, width: 400 }}
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
