import React, { Fragment } from "react";
import classes from "../components/Project/Project.module.css";
import Project from "../components/Project/Project";
import animxstore from "../public/projects/animxstore.png";

const Projects = () => {
  return (
    <section className={classes.hero}>
      <h1>Projects</h1>
      <p className={classes.text}>
        I’ve built products of various types and sizes using the most popular
        technologies out there, ranging from one page sites to E-commerce and
        Real Estate Websites. Here is a collection of some of my projects and
        experiences.
      </p>
      <div className={classes.projects}>
        <Project url={animxstore} />
        <Project url={animxstore} />
        <Project url={animxstore} />
      </div>
    </section>
  );
};

export default Projects;
