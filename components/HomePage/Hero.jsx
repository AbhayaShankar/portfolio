import React, { useEffect, useState } from "react";
import classes from "./Hero.module.css";
import Image from "next/image";
import abhayaS from "../../public/abhayaS.png";

const Hero = () => {
  const text =
    "Hello, I am Abhaya - a Professional Web developer using React and NextJS .";
  const [splitText, setSplitText] = useState([]);

  useEffect(() => {
    const textArr = text.split("");
    setSplitText(textArr);
  }, [text]);

  return (
    <section className={classes.hero}>
      <div className={classes.circle}>
        <div className={classes.image}>
          <Image src={abhayaS} alt="image of Abhaya" width={600} height={600} />
        </div>
        <div className={classes.text}>
          {splitText.map((char, i) => (
            <span key={i} style={{ transform: `rotate(${i * 4.75}deg)` }}>
              {char}
            </span>
          ))}
        </div>
      </div>
      <h1>Hi! I'm Abhaya. </h1>
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
        Currently I am working at Capgemini Inc. as a React Frontend Developer.
      </p>
    </section>
  );
};

export default Hero;
