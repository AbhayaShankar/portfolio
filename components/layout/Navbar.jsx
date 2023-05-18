import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header className={classes.header}>
      <div className={classes.left_navbar}>
        <p>
          <Link href="/">Abhaya's Blog</Link>
        </p>
      </div>
      <nav className={classes.right_navbar}>
        <ul className="">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Projects</li>
          <li>
            <Link href="/posts">Blogs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <img
        onClick={() => setIsMenuActive(true)}
        className={classes.menu}
        src="/menu.png"
        alt=""
      />
    </header>
  );
};

export default Navbar;
