import React from "react";
import Image from "next/image";
import abhaya from "../../public/about.png";
import classes from "./About.module.css";
import Wavy from "../Wrapper/Wavy";
import Work from "./Work";
import Site from "./Site";

const About = () => {
  return (
    <div className={classes.about}>
      <Image src={abhaya} alt="" width={900} height={900} />
      <div className={classes.intro}>
        <h3>Hey! Folks on the Web...</h3>
        <p>
          I'm Abhaya, an India based professional Full Stack MERN Developer with{" "}
          <strong>2+ </strong>
          years of experience in ReactJS/NextJS, ExpessJs Development with
          typescript. I specialize in creating seamless and responsive user
          interfaces for web-based applications that prioritize design and user
          experience. Proven ability to collaborate effectively and deliver
          high-quality web solutions.
          <br />
          <br />I love building projects and contributing to Open Source. I am
          learning and getting more hands-on expertise on Blockchain
          Technologies using EthersJs.
          <br />
          <br />
          Currently I am working at Capgemini Inc. as a React Developer where I
          am handling SEO, building Dashboards, maintaining clean code
          structure, focusing on code quality, performance and adding new
          features such as Analytics and Reporting.
          <br />
          <br />
          Just after college completed, I worked as a frontend developer at
          Scrollify where I developed the frontend for Scrollify Playground and
          User Dashboards. Not only I understood working of production ready
          applications but at the same time developed key soft skills like
          handling clients and working in a real team, communicating and
          collaborating with marketing and Design team.
          <br />
          <br />
          After this I also worked as a frontend developer at Memsaab - an
          online Saree Clothing store.
          <br />
          <br />
          In my most recent project, I have developed a full stack app for a gym
          - fitness hub using NextJS with Typescript.
          <br />
          <br />
          I have dwelved deeper into Backend technologies like websockets and
          webRTCs and build some cool chat Applications and Video conferencing
          apps as well.
          <br />
          <br />I am currently immersed in learning blockchain Development
          paving my way into the web3 world.
          <br />
          <br />
          Apart from my work, I share interest in weightlifting, armwrestling,
          watching anime and collecting anime merchandise, drag races, exploring
          and travelling.
        </p>
      </div>
      <Wavy />
      <Work />
      <Wavy />
      <Site />
    </div>
  );
};

export default About;
