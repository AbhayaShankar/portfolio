import React, { Fragment } from "react";
import classes from "../components/Project/Project.module.css";
import Project from "../components/Project/Project";
import { ProjectsList } from "../helpers/ProjectList";

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
        {ProjectsList.map((proj) => {
          const { id, name, desc, skills, link, url, note, source } = proj;
          return (
            <Project
              key={id}
              name={name}
              url={url}
              desc={desc}
              link={link}
              skills={skills}
              note={note}
              source={source}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
