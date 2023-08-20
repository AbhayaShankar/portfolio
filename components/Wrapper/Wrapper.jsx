import React from "react";
import classes from "./Wrapper.module.css";

const Wrapper = ({ title, desc, children }) => {
  return (
    <div className={classes.wrapper}>
      <h1>{title}</h1>
      <p>{desc}</p>
      {children}
    </div>
  );
};

export default Wrapper;
