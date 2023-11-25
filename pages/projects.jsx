import React, { Fragment } from "react";
import classes from "../components/Project/Project.module.css";
import Project from "../components/Project/Project";
import { ProjectsList } from "../helpers/ProjectList";
import Wrapper from "../components/Wrapper/Wrapper";
import Wavy from "../components/Wrapper/Wavy";
import Graveyard from "../components/Project/Graveyard";
import { Head } from "next/document";

const Projects = () => {
  return (
    <Fragment>
      <Head>
        <title>Projects - Abhaya Shankar</title>
        <meta
          name="Projects - Abhaya Shankar"
          content="List of some of the key projects I have worked upon and tech stacks used."
        />
      </Head>
      <Wrapper
        title={"Projects"}
        desc={` I’ve built products of various types and sizes using the most popular
          technologies out there, ranging from one page sites to E-commerce and
          Real Estate Websites. Here is a collection of some of my projects and
          experiences.`}
      >
        <Wavy />
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
          <Wavy />
          <Graveyard />
        </div>
      </Wrapper>
    </Fragment>
  );
};

export default Projects;
