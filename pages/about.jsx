import React from "react";
import Image from "next/image";
import abhaya from "../public/abhaya.png";
import classes from "../components/About/About.module.css";

const about = () => {
  return (
    <div className={classes.about}>
      <Image src={abhaya} alt="" />
      <div className={classes.intro}>
        <h3>Hey! Folks on the Web</h3>
        <p>
          I'm Abhaya, an India based professional Frontend Developer with over 1
          and half years of experience in ReactJS/NextJS Development. I
          specialize in creating responsive user interfaces for webbased
          applications that prioritize design and user experience.
          <br />
        </p>
      </div>
    </div>
  );
};

export default about;
