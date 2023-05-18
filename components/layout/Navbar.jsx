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
        alt="menu-btn"
      />
      {isMenuActive && (
        <>
          <nav className={classes.menu_right_navbar}>
            <ul className="">
              <li>
                <Link onClick={() => setIsMenuActive(false)} href="/">
                  Home
                </Link>
              </li>
              <li onClick={() => setIsMenuActive(false)}>Projects</li>
              <li>
                <Link onClick={() => setIsMenuActive(false)} href="/posts">
                  Blogs
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsMenuActive(false)} href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <img
            onClick={() => setIsMenuActive(false)}
            className={classes.close_btn}
            src="/close.png"
            alt="close-btn"
          />
        </>
      )}
    </header>
  );
};

export default Navbar;
