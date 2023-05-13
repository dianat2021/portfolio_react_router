import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
//STYLES
import styles from "../styles/homePage/Home.module.css";
import sharedStyles from "../styles/sharedCSS/sharedcss.module.css";
import hamburgerMenu from "../styles/hamburgerMenu/hamburgerMenu.module.css";
//COMPONENTS
import Navigation from "../components/Navigation";
// import Button from "../components/Button";
import HamburgerMenu from "../components/HamburgerMenu";

const Home = ({ burgerMenuStatus, burgerMenuHandler, setBurgerMenuStatus }) => {
  console.log(burgerMenuStatus);
  return (
    <Fragment>
      <div className={sharedStyles["grid-container"]}>
        <nav
          className={
            burgerMenuStatus
              ? hamburgerMenu["main-nav__container__active"]
              : styles["main-nav__container"]
          }
        >
          <Navigation burgerMenuStatus={burgerMenuStatus} setBurgerMenuStatus={setBurgerMenuStatus}/>
        </nav>
        <nav>
          <HamburgerMenu
            burgerMenuStatus={burgerMenuStatus}
            burgerMenuHandler={burgerMenuHandler}
          />
        </nav>
        <div className={styles["contactBtn-container"]}>
            <NavLink to='/contact' className={styles["contact-Btn"]}>Contact</NavLink>
          </div>
        <div className={styles["introduction-container"]}>
          <h1>Hi! I'm Mohammadreza Dianat</h1>
          <p className={styles["introduction-text"]}>
            I'm a Senior Web Developer specializing in front-end development.
            Experienced with all stages of the development cycle for dynamic web
            projects. Experienced in programming languages such as HTML5, CSS,
            JavaScript, React, Redux, TypeScript, and PostgreSQl.
          </p>
          <NavLink
            to="/about"
            className={styles["introduction-contactButton"]}
          >
            About Me
          </NavLink>
        </div>
        <div className={styles["photo-container"]}></div>
      </div>
    </Fragment>
  );
};

export default Home;
