import React from "react";
import { ProjectsList } from "../../helpers/ProjectList";
import classes from "./Project.module.css";
import Link from "next/link";
import Image from "next/image";

const FeaturedProject = () => {
  return (
    <section className={classes.featuredProj}>
      <h1 className={classes.featured}>Featured Projects</h1>
      <p className={classes.text}>
        A collection of some side projects that I have shipped recently.
      </p>
      <div className={classes.grid}>
        {ProjectsList.map((proj) => {
          if (proj.featured) {
            const { id, name, desc, link, url, shortdesc } = proj;
            const textCount = shortdesc.length;
            const trimmedText = shortdesc.substr(0, 150);

            return (
              <div key={id} className={classes.project}>
                <Link href={link} target="blank">
                  <div className={classes.image}>
                    <Image src={url} alt={name} width={300} height={200} />
                  </div>
                  <div className={classes.content}>
                    <h3>{name}</h3>
                    {textCount > 140 ? (
                      <p>{trimmedText}...</p>
                    ) : (
                      <p>{shortdesc}</p>
                    )}
                  </div>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default FeaturedProject;
