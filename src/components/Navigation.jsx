import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import styles from "../styles/navigation/Navigation.module.css";
const Navigation = ({ burgerMenuStatus, setBurgerMenuStatus }) => {
  const navLinkStyleHandler = ({ isActive }) => {
    return {
      color: isActive ? "orange" : "",
    };
  };
  const closeMenuHandler= ()=>{
    setBurgerMenuStatus(false)
  }
  return (
    <Fragment>
      <nav className={styles["main-nav"]}>
        <div className={styles["nav-top-icon-container"]}>
          <svg
            className={styles["nav-top-icon"]}
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="#f58750"
            viewBox="0 0 24 24"
          >
            <path
              fill="#f58750"
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
              opacity="1"
            ></path>
            <path
              fill="#292D32"
              d="M8 14.75c-.19 0-.38-.07-.53-.22l-2-2a.755.755 0 010-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L7.06 12l1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM16 14.75c-.19 0-.38-.07-.53-.22a.755.755 0 010-1.06L16.94 12l-1.47-1.47a.755.755 0 010-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22zM11 15.08a.745.745 0 01-.68-1.05l2-4.67c.16-.38.6-.56.98-.39.38.16.56.6.39.99l-2 4.67c-.12.28-.4.45-.69.45z"
            ></path>
          </svg>
        </div>
        <ul
          className={
            burgerMenuStatus
              ? styles["main-nav__pages__burger"]
              : styles["main-nav__pages"]
          }
        >
          <NavLink
            to="/"
            className={styles.navLink}
            style={navLinkStyleHandler}
            onClick={closeMenuHandler}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={styles.navLink}
            style={navLinkStyleHandler}
            onClick={closeMenuHandler}
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={styles.navLink}
            style={navLinkStyleHandler}
            onClick={closeMenuHandler}
          >
            Skills
          </NavLink>
          <NavLink
            to="/hobbies"
            className={styles.navLink}
            style={navLinkStyleHandler}
            onClick={closeMenuHandler}
          >
            Hobbies
          </NavLink>
          <NavLink
            to="/certificates"
            className={styles.navLink}
            style={navLinkStyleHandler}
            onClick={closeMenuHandler}
          >
            Certificates
          </NavLink>
          <NavLink
            to="/contact"
            className={styles.navLink}
            style={navLinkStyleHandler}
            onClick={closeMenuHandler}
          >
            Contact
          </NavLink>
        </ul>
        <div className={styles["main-nav__iconsContainer"]}>
          <a href="https://www.linkedin.com/in/mohammadreza-dianat-5ab75a209/">
            <FaLinkedin color="white" size={"2.5rem"} />
          </a>
          <a href="https://instagram.com/reza66459?igshid=ZDdkNTZiNTM=">
            <FaGitSquare color="white" size={"2.5rem"} />
          </a>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navigation;
