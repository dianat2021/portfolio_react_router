import React from "react";
//STYLES
import sharedStyles from "../styles/sharedCSS/sharedcss.module.css";
import styles from "../styles/about/about.module.css";
import hamburgerMenu from "../styles/hamburgerMenu/hamburgerMenu.module.css";
//COMPONENTS
import Navigation from "../components/Navigation";
import HamburgerMenu from "../components/HamburgerMenu";

import Header from "../components/Header";
import { NavLink } from "react-router-dom";
const About = ({ burgerMenuStatus, burgerMenuHandler }) => {
  return (
    <div className={sharedStyles["grid-container"]}>
      <nav
        className={
          burgerMenuStatus
            ? hamburgerMenu["main-nav__container__active"]
            : styles["main-nav__container"]
        }
      >
        <Navigation burgerMenuStatus={burgerMenuStatus} />
      </nav>
      <nav>
        <HamburgerMenu
          burgerMenuStatus={burgerMenuStatus}
          burgerMenuHandler={burgerMenuHandler}
        />
      </nav>
      <header className={styles["page-title-container"]}>
        <Header title="ABOUT ME" />
      </header>
      <section className={styles.biography}>
        <p>
          I'm a Senior Web Developer specializing in front-end development. I
          was born in a city called Shahroud which is located in the north of
          Iran. Since I started high school, computers, and programming have
          been an inseparable part of my life. I received my Associate Degree in
          the field of Computer Software Engineering. I learned about
          programming languages such as HTML, CSS, C#, and SQL.
        </p>
        <p>
          In continuation of my studies, I obtained my Bachelor's Degree in
          Computer Software Technology Engineering. During my Bachelor's
          studies, I leaned more towards front-end engineering. I learned
          Javascript and improved my HTML and CSS knowledge and it helped me to
          design, develop, and maintain several websites. I moved to Oslo,
          Norway to study a Master's degree in Programming and System
          Architecture at University of Oslo. During my studies, i learned about
          React, Redux, privacy concepts such as GDPR, Agile methodologies, and
          design principles. I graduated in 2022 with the GPA of "A".
        </p>
        <p className={styles["download-cv-container"]}>
          <NavLink to="#" className={styles["download-cv"]}>
            Download CV
          </NavLink>
        </p>
      </section>
      <section className={styles["photo-container"]}>
        <div className={styles["my-photo"]}></div>
      </section>
    </div>
  );
};

export default About;
