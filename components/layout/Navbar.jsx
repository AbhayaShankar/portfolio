import React, { useContext, Fragment } from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { Context } from "../../context/context";
import { useRouter } from "next/router";

const Navbar = () => {
  const { isMenuActive, setIsMenuActive } = useContext(Context);

  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path ? classes.active : "";
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.left_navbar}>
          <p>
            <Link href="/" onClick={() => setIsMenuActive(false)}>
              Abhaya Shankar
            </Link>
          </p>
        </div>
        <nav className={classes.right_navbar}>
          <ul>
            <li>
              <Link className={isActive("/")} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={isActive("/blogs")} href="/blogs">
                Blogs
              </Link>
            </li>
            <li>
              <Link className={isActive("/projects")} href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className={isActive("/about")} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={isActive("/contact")} href="/contact">
                Contact
              </Link>
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
                <li>
                  <Link onClick={() => setIsMenuActive(false)} href="/blogs">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsMenuActive(false)} href="/projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsMenuActive(false)} href="/about">
                    About
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
    </Fragment>
  );
};

export default Navbar;
