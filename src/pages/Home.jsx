import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
//COMPONENTS
import Navbar from "../components/Navbar";
//STYLES
import styles from "../styles/pages/home.module.css";

const Home = () => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main className={styles['main-container']}>
        <section className={styles['home-content-container']}>
          <div className={styles['home-introduction-container']}>
            <h1>Hi! I'm Reza Dianat</h1>
            <p>
            I'm a Senior Web Developer and software engineer specializing in front-end development. I am experienced with all stages of the development cycle for dynamic web projects and in programming languages such as HTML5, CSS, JavaScript, React, Redux, TypeScript, and PostgreSQL. 
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
