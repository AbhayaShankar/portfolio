import React, { useContext, useEffect, useState } from "react";
import classes from "./ContactForm.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../../context/context";
import { BsStars } from "react-icons/bs";

const ContactForm = () => {
  const [emailVal, setEmailVal] = useState("");
  const [firstNameVal, setFirstNameVal] = useState("");
  const [lastNameVal, setLastNameVal] = useState("");
  const [numberVal, setNumberVal] = useState("");
  const [messageVal, setMessageVal] = useState("");
  const [currStatus, setCurrStatus] = useState();
  const [reqError, setReqError] = useState();
  const { setIsMenuActive } = useContext(Context);

  // Hover Effect
  const [isDesktop, setIsDesktop] = useState(true);
  const [cardStyle, setCardStyle] = useState({
    transform: `perspective(0) rotateX(0deg) rotateY(0deg)`,
  });

  const pendingNotif = (text) => toast(text);
  const errorNotif = (text) => toast.error(text);
  const successNotif = (text) => toast.success(text);

  const handleNumberChange = (e) => {
    const inputVal = e.target.value;
    const truncatedVal = inputVal.slice(0, 10); // Truncate to 10 characters
    setNumberVal(truncatedVal);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsDesktop(false);
    } else setIsDesktop(true);
  }, [isDesktop]);

  // Valid Phone number should be Phone Nunber starting with 6-9 and then having total 10 digits.
  const validPhoneNumber = numberVal.length === 10;

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

    if (!validPhoneNumber) {
      setCurrStatus("error");
    }

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
    pendingNotif("Thankyou for connecting with me!");
  }

  if (currStatus === "success") {
    successNotif("I will get back to you shortly!");
  }

  if (currStatus === "error") {
    errorNotif(reqError);
  }

  const THRESHOLD = 4;

  const handleHover = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;

    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    // setCardStyle({
    //   transform: `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`,
    // });
  };

  const resetStyles = () => {
    setCardStyle({
      transform: `perspective(0) rotateX(0deg) rotateY(0deg)`,
    });
  };

  return (
    <section
      // style={{ position: "relative" }}
      className={classes.contact}
      onMouseMove={handleHover}
      onMouseLeave={resetStyles}
      style={isDesktop ? cardStyle : null}
    >
      <h2>
        I'd Love to hear from you
        <BsStars
          className={classes.star1}
          style={{ marginLeft: 20 }}
          color="#FFB627"
          size={20}
        />
      </h2>

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
              onChange={(e) => {
                setNumberVal(e.target.value);
                handleNumberChange;
              }}
              inputMode="numeric"
              maxLength={10}
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

        <BsStars
          style={{ position: "absolute", top: 182, left: 428 }}
          color="#FFB627"
          size={25}
          className={classes.star2}
        />
        <BsStars
          style={{ position: "absolute", top: -25, left: 20 }}
          color="#FFB627"
          size={50}
          className={classes.star3}
        />

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
