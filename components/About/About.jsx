import React from "react";
import Image from "next/image";
import abhaya from "../../public/about.png";
import classes from "./About.module.css";
import Wavy from "../Wrapper/Wavy";

const About = () => {
  return (
    <div className={classes.about}>
      <Image src={abhaya} alt="" />
      <div className={classes.intro}>
        <h3>Hey! Folks on the Web...</h3>
        <p>
          I'm Abhaya, an India based professional Frontend Developer with over 1
          &#189; years of experience in ReactJS/NextJS Development. I specialize
          in creating responsive user interfaces for web-based applications that
          prioritize design and user experience.
          <br />
          <br />I love building projects and contributing to Open Source. I am
          learning and getting more hands-on expertise on Backend Technologies
          using Express JS.
          <br />
          <br />
          Currently I am working at Capgemini Inc. as a React Frontend
          Developer.
        </p>
      </div>
      <Wavy />
    </div>
  );
};

export default About;
