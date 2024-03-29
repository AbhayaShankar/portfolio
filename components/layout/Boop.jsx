// hooks/use-boop.js
import React from "react";
import { useSpring } from "react-spring";

function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
}) {
  const [isBooped, setIsBooped] = React.useState(false);
  const style = useSpring({
    display: "inline-block",
    marginLeft: "10px",
    marginRight: "0px",
    backfaceVisibility: "hidden",
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: springConfig,
  });

  React.useEffect(() => {
    // All the same stuff...
    if (!isBooped) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped]);

  const trigger = React.useCallback(() => {
    setIsBooped(true);
  }, []);

  return [style, trigger];
}

export default useBoop;
