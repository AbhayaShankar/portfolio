import React from "react";
import { workExp } from "../../helpers/ProjectList";
import classes from "./Work.module.css";

const Work = () => {
  return (
    <div className={classes.works}>
      <h1>Work</h1>
      {workExp.map((work) => {
        const { id, company, position, jobType, startDate, endDate } = work;
        return (
          <div key={id} className={classes.work}>
            <p>
              {company} <span className={classes.jobType}>({jobType})</span>
            </p>

            <div className={classes.position}>
              <p>{position}</p>
              <p>
                {startDate} - {endDate}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
