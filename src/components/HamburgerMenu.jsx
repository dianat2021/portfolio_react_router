import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "@react-icons/all-files/fa/FaRegWindowClose";
import styles from "../styles/hamburgerMenu/hamburgerMenu.module.css";
const HamburgerMenu = ({ burgerMenuStatus, burgerMenuHandler }) => {
  return (
    <Fragment>
      <div className={styles["Hamburger-menu-container"]}>
        <section className={styles["Hamburger-buttons-container"]}>
          <button onClick={burgerMenuHandler} >
            {burgerMenuStatus ? (
              <FaRegWindowClose color="#f58750" size={"2.5rem"} />
            ) : (
              <GiHamburgerMenu color="#f58750" size={"2.8rem"} />
            )}
          </button>
          <NavLink to="/contact" className={styles["contact-btn-hamburger"]}>
            Contact
          </NavLink>
        </section>
      </div>
    </Fragment>
  );
};

export default HamburgerMenu;
