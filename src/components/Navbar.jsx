import React, { Fragment, useRef} from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/components/navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const menuElement = useRef();
  const closeMenuHandler = (e) => {
    menuElement.current.style.right = "-1600px";
    // menuElement.current.style.display = "none";

  };
  const openMenuHandler = (e) => {
    menuElement.current.style.right = "0";
    // menuElement.current.style.display = "flex";
  };
  const navLinkStyleHandler = ({ isActive }) => {
    return {
      color: isActive ? "orange" : "",
    };
  };
  return (
    <Fragment>
      <nav>
        <span>
          <svg
            className={styles["nav-logo"]}
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
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
        </span>

        <div className={styles["navlinks-main-container"]}>
          <ul className={styles["navlinks-container"]} ref={menuElement}>
            {/* <li> */}
                         <FaTimes
              color="#f58750"
              size={"4rem"}
              className={styles["hamburger-close-button"]}
              onClick={closeMenuHandler}
            />
            {/* </li> */}
 
            <li>
              <NavLink
                to="/"
                className={styles.navLink}
                style={navLinkStyleHandler}
                onClick={closeMenuHandler}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={styles.navLink}
                style={navLinkStyleHandler}
                onClick={closeMenuHandler}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={styles.navLink}
                style={navLinkStyleHandler}
                onClick={closeMenuHandler}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hobbies"
                className={styles.navLink}
                style={navLinkStyleHandler}
                onClick={closeMenuHandler}
              >
                Hobbies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/certificates"
                className={styles.navLink}
                style={navLinkStyleHandler}
                onClick={closeMenuHandler}
              >
                Certificates
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={styles.navLink}
                style={navLinkStyleHandler}
                onClick={closeMenuHandler}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <GiHamburgerMenu
            color="#f58750"
            size={"4rem"}
            className={styles["hamburger-open-button"]}
            onClick={openMenuHandler}
          />
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
