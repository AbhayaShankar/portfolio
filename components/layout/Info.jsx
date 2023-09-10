import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import classes from "./Info.module.css";

const Info = ({ rotation = 0, timing = 150, children }) => {
  const [status, setStatus] = useState(false);
  const [isBooped, setIsBooped] = useState(false);

  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    config: {
      tension: 300,
      friction: 10,
    },
  });

  useEffect(() => {
    if (!isBooped) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);

  const trigger = () => {
    setIsBooped(true);
  };

  const handleStatus = () => {
    setStatus(true);
    console.log("Entered");
  };

  const exitStatus = () => {
    setStatus(false);
    console.log("Exit");
  };

  const handleMouseEnter = () => {
    handleStatus();
    trigger();
  };

  return (
    <div className={classes.info}>
      <animated.span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={exitStatus}
        style={style}
        className={classes.btn}
      >
        {children}
      </animated.span>

      <div className={classes.status}>
        {status && (
          <h3>
            Portfolio is not up-to-date with recent projects and Experiences.
          </h3>
        )}
      </div>
    </div>
  );
};

export default Info;
