import React, { useEffect, useRef, useState, useContext } from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { Context } from "../../context/context";

const Navbar = () => {
  const { isMenuActive, setIsMenuActive } = useContext(Context);
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (!clsMenuOnOutsideClickRef.current.contains(event.target)) {
  //       setIsMenuActive(false);
  //     }
  //   };
  //   document.addEventListener("click", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [clsMenuOnOutsideClickRef]);

  return (
    <header className={classes.header}>
      <div className={classes.left_navbar}>
        <p>
          <Link href="/" onClick={() => setIsMenuActive(false)}>
            Abhaya's Blog
          </Link>
        </p>
      </div>
      <nav className={classes.right_navbar}>
        <ul>
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
        <div className={classes.stickyMenu}>
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
        </div>
      )}
    </header>
  );
};

export default Navbar;
