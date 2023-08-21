import Link from "next/link";
import React, { useState } from "react";

const Error = () => {
  const [redirect, setRedirect] = useState(false);

  const timer = (n) => {
    setInterval(() => {
      n = n - 1;
      //   console.log(n);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  };

  return (
    <div>
      <h1>Oops! The page you are trying to find is unavailable.</h1>
      <p>Redirecting back to home in {timer(5)} </p>
      <Link href="/"></Link>
    </div>
  );
};

export default Error;
