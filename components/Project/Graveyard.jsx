import React from "react";
import classes from "./Project.module.css";
import { graveyard } from "../../helpers/ProjectList";

const Graveyard = () => {
  return (
    <div className={classes.graveyard}>
      <h2>Graveyard</h2>
      <p>
        Significant projects I worked on that are now retired but plays vital
        role in my development journey.
      </p>
      {graveyard.map((item) => {
        const { id, name, desc } = item;
        return (
          <div className={classes.graveItem} key={id}>
            <h3>{name}</h3>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Graveyard;
