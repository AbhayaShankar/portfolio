import React, { useEffect, useState } from "react";
import classes from "./Hero.module.css";
import Image from "next/image";
import abhaya from "../../public/abhaya.png";
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
        I am a professional Web Developer who excels in creating responsive Web
        Apps focusing on user Interfaces and User Experience. These are Blog
        posts where I share Important Topics as I go learning various technology
      </p>
    </section>
  );
};

export default Hero;
