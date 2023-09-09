import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import classes from "./Info.module.css";
import { ImInfo } from "react-icons/im";

const Info = ({ rotation = 0, timing = 150, children }) => {
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

  return (
    <div className={classes.info}>
      <animated.span
        onMouseEnter={trigger}
        style={style}
        className={classes.btn}
      >
        <ImInfo />
      </animated.span>
    </div>
  );
};

export default Info;
