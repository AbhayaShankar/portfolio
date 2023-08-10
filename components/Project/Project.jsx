import React from "react";
import classes from "./SingleProject.module.css";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";

const Project = ({ url, name, desc }) => {
  return (
    <div className={classes.project}>
      <Image src={url} width={600} height={600} />
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
