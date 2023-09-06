import React from "react";
import classes from "./Work.module.css";
import Link from "next/link";

const Site = () => {
  return (
    <div className={classes.works}>
      <h1>About this Site</h1>
      <p className={classes.aboutSite}>
        In case you were wondering, this site is{" "}
      </p>

      <ul>
        <li>
          Designed by{" "}
          <text>
            <Link href={"https://www.harshkumarpandey.com/"} target="blank">
              Harsh Kumar Pandey
            </Link>
          </text>
        </li>
        <li>
          Developed and design tweaked by me using{" "}
          <text>
            <Link href={"https://nextjs.org/"} target="_blank">
              {" "}
              NextJs
            </Link>
          </text>
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
