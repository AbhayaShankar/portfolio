import React from "react";
import classes from "./SingleProject.module.css";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";

const Project = ({ id, url, name, desc, link, skills }) => {
  // Trimmed Link for websites.
  const trimmedLink = link.split("/")[2];

  return (
    <div className={classes.project} id={id}>
      <Image src={url} width={900} height={7500} />
      <div className={classes.projDetails}>
        <h2>{name}</h2>
        <p>{desc}</p>
        <div className={classes.skills}>
          Skills :
          {skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </div>
        <Link href={link} target="blank" className={classes.link}>
          <span>{trimmedLink}</span>
          <BiLinkExternal />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Project;
