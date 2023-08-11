import React from "react";
import classes from "./SingleProject.module.css";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";

const Project = ({ id, url, name, desc, link }) => {
  return (
    <div className={classes.project} id={id}>
      <Image src={url} width={900} height={7500} />
      <h2>{name}</h2>
      <p>{desc}</p>
      <div className={classes.link}>
        <Link href={link} target="blank">
          Link
        </Link>
        <BiLinkExternal />{" "}
      </div>
    </div>
  );
};

export default Project;
