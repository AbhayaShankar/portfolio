import React, { Fragment } from "react";
import classes from "./SingleProject.module.css";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";
import Head from "next/head";

const Project = ({ id, url, name, desc, link, skills }) => {
  // Trimmed Link for websites.
  const trimmedLink = link.split("/")[2];

  return (
    <Fragment>
      <Head>
        <title>Projects - Abhaya Shankar</title>
        <meta
          name="description"
          content="Abhaya Shankar Portfolio - Subscribe to the blog app so that you never miss any latest blog."
        />
      </Head>
      <div className={classes.project} id={id}>
        <Image src={url} width={900} height={7500} alt={name} />
        <div className={classes.projDetails}>
          <h2>{name}</h2>
          <p>{desc}</p>
          <div className={classes.skills}>
            Skills :
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </div>
          <Link href={link} target="blank" className={classes.link}>
            <span>{trimmedLink}</span>
            <BiLinkExternal />{" "}
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Project;
