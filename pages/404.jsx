import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import error from "../public/404.png";
import Image from "next/image";

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
    <div className="error">
      <div>
        <h1>Oops! The page you are trying to find is unavailable.</h1>
        <p>Redirecting back to home in {redirect} </p>
      </div>
      <Image src={error} width={500} height={500} alt="error-img" />
    </div>
  );
};

export default Error;
