import React from "react";
import classes from "./Work.module.css";
import Link from "next/link";

const Site = () => {
  return (
    <div className={classes.works}>
      <h1>About this Site</h1>
      <p className={classes.aboutSite}>
        In case you are wondering, this site is{" "}
      </p>

      <ul>
        <li>
          Designed by{" "}
          <span>
            <Link href={"#"}>Harsh Kumar Pandey</Link>
          </span>
        </li>
        <li>
          Developed and design tweaked by me using <span> NextJS</span>
        </li>
        <li>
          Hosted by <span> Hostinger </span>with deployment via{" "}
          <span> Vercel</span>
        </li>
      </ul>
    </div>
  );
};

export default Site;
