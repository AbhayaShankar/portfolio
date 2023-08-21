import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();
  const [redirect, setRedirect] = useState("6");

  useEffect(() => {
    let time = 5;
    const timer = setInterval(() => {
      if (time > 0) {
        setRedirect(time);
        time--;
      } else {
        router.push("/");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Oops! The page you are trying to find is unavailable.</h1>
      <p>Redirecting back to home in {redirect} </p>
      <Link href="/"></Link>
    </div>
  );
};

export default Error;
