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
          <text>
            <Link href={"https://www.harshkumarpandey.com/"}>
              Harsh Kumar Pandey
            </Link>
          </text>
        </li>
        <li>
          Developed and design tweaked by me using <text> NextJS</text>
        </li>
        <li>
          Hosted by <text> Hostinger </text>with deployment via{" "}
          <text> Vercel</text>
        </li>
      </ul>
    </div>
  );
};

export default Site;
