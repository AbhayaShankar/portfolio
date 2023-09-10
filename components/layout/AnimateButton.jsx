import { animated } from "react-spring";
import useBoop from "./Boop";
import { BsDownload } from "react-icons/bs";

export default function AnimateButton() {
  const [style, trigger] = useBoop({ y: 5 });
  return (
    <button onMouseEnter={trigger}>
      Resume
      <animated.span style={style}>
        <BsDownload />
      </animated.span>
    </button>
  );
}
