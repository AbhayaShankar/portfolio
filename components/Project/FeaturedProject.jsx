import React from "react";
import { ProjectsList } from "../../helpers/ProjectList";
import classes from "./Project.module.css";

const FeaturedProject = () => {
  return (
    <section className={classes.featuredProj}>
      <h1 className={classes.featured}>Featured Projects</h1>
      <div className={classes.grid}>
        {ProjectsList.map((proj) => {
          if (proj.featured) {
            return <p>project</p>;
          }
        })}
      </div>
    </section>
  );
};

export default FeaturedProject;
