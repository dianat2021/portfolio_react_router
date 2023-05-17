import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
//COMPONENTS
import Navbar from "../components/Navbar";

import styles from "../styles/pages/home.module.css";
//STYLES
// import styles from "../styles/homePage/Home.module.css";
// import sharedStyles from "../styles/sharedCSS/sharedcss.module.css";
// import hamburgerMenu from "../styles/hamburgerMenu/hamburgerMenu.module.css";
// //COMPONENTS
// import Navigation from "../components/Navigation";
// import Button from "../components/Button";
// import HamburgerMenu from "../components/HamburgerMenu";

const Home = () => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <section className={styles['home-content-container']}>
          <div className={styles['home-introduction-container']}>
            <h1>Hi! I'm Mohammadreza Dianat</h1>
            <p>
              I'm a Senior Web Developer specializing in front-end development.
              Experienced with all stages of the development cycle for dynamic
              web projects. Experienced in programming languages such as HTML5,
              CSS, JavaScript, React, Redux, TypeScript, and PostgreSQl.
            </p>
            <NavLink to="/about" className={styles['about-me-button']}>About Me</NavLink>
          </div>
          <div className={styles['home-picture-container']}>
            <div className={styles['homepage-picture']}>

            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
