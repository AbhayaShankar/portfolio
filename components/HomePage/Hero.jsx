import React, { useEffect, useState } from "react";
import classes from "./Hero.module.css";
import Image from "next/image";
import profileImg from "../../public/profile.png";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import Wavy from "../Wrapper/Wavy";

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
          <Image
            src={profileImg}
            alt="image of Abhaya"
            width={600}
            height={600}
          />
        </div>
        <div className={classes.text}>
          {splitText.map((char, i) => (
            <span key={i} style={{ transform: `rotate(${i * 4.75}deg)` }}>
              {char}
            </span>
          ))}
        </div>
      </div>
      <h1>UI/UX. Front-end. Freelance. </h1>
      <p>
        I'm Abhaya Shankar, an India based professional Frontend Developer with
        over 2{/* &#189;  */} years of experience in ReactJS/NextJS Development.
        I specialize in creating responsive user interfaces for web-based
        applications that prioritize design and user experience.
        <br />
        <br />I love building projects and contributing to Open Source. I am
        learning and getting more hands-on expertise on Backend Technologies
        using Express JS.
        <br />
        <br />
        Currently I am working at Capgemini Inc. as a Frontend Developer.
      </p>
      <div className={classes.socials}>
        <Link href={"https://github.com/AbhayaShankar"} target="blank">
          <FaGithub />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/abhayashankar/"}
          target="blank"
        >
          <FaLinkedinIn />
        </Link>
        <Link href={"https://twitter.com/AbhayaShankar2"} target="blank">
          {/* twitter Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            fill="#b2adb8"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </Link>
        <Link
          href={"https://www.instagram.com/abhaya_shankar05/"}
          target="blank"
        >
          <FaInstagram />
        </Link>
        <Link
          href={
            "mailto:shankarabhaya9@gmail.com?subject=Mail%20for%20Hiring%20you&body=Hi%20Abhaya"
          }
          target="blank"
        >
          <AiOutlineMail />
        </Link>
      </div>
      <Wavy />
    </section>
  );
};

export default Hero;
