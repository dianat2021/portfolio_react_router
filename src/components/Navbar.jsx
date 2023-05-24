import React, { Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
//STYLES
import styles from "../styles/components/navbar.module.css";
//ICONS
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
//COMPONENTS
import ContactFormIcons from "./ContactFormIcons";

const Navbar = () => {
  const menuElement = useRef();
  const closeMenuHandler = (e) => {
    menuElement.current.style.right = "-1600px";
  };
  const openMenuHandler = (e) => {
    menuElement.current.style.right = "0";
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
          <div className={styles["contact-form-icons-container"]}>
            <ContactFormIcons />
          </div>
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
