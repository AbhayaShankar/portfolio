import React from "react";
import classes from "./SingleProject.module.css";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";

const Project = ({ url }) => {
  return (
    <div className={classes.project}>
      <Image src={url} />
      <h2>Title</h2>
      <p>
        Description - About the project.
        <br />
        What you did and what did you acheived.
      </p>
      <div className={classes.link}>
        <p>Link</p>
        <BiLinkExternal />{" "}
      </div>
    </div>
  );
};

export default Project;
