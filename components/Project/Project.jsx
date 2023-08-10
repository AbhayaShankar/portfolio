import React from "react";
import classes from "./SingleProject.module.css";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";

const Project = ({ id, url, name, desc }) => {
  return (
    <div className={classes.project} id={id}>
      <Image src={url} width={900} height={7500} />
      <h2>{name}</h2>
      <p>{desc}</p>
      <div className={classes.link}>
        <p>Link</p>
        <BiLinkExternal />{" "}
      </div>
    </div>
  );
};

export default Project;
