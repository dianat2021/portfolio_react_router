import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
//COMPONENTS
import Navbar from "../components/Navbar";
//STYLES
import styles from "../styles/pages/about.module.css";

const AboutPage = () => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <section className={styles["about-content-container"]}>
          <div className={styles["about-biography-container"]}>
            <h1>ABOUT ME</h1>
            <p>
            I'm a Senior Web Developer and software engineer specializing in front-end development. I was born in a city called Shahroud which is located in the north of Iran. Since I started high school, computers and programming have been an inseparable part of my life. I received my Associate Degree in the field of Computer Software Engineering. I learned about programming languages such as HTML, CSS, C#, and SQL.
            </p>
            <p>
            Continuing my studies, I obtained my Bachelor's Degree in Computer Software Technology Engineering. During that time, I leaned more toward front-end engineering. I learned Javascript and improved my HTML and CSS knowledge, and it helped me to design, develop, and maintain several websites. I moved to Oslo, Norway, to study for a Master's in Programming and System Architecture at the University of Oslo. During my studies, I learned about React, Redux, privacy concepts such as GDPR, Agile methodologies, and design principles. I graduated in 2022 with a GPA of "A.”
            </p>
            <p className={styles["download-cv-container"]}>
              <NavLink to="#" className={styles["download-cv-button"]}>
                Download CV
              </NavLink>
            </p>
          </div>
          <div className={styles["about-picture-container"]}>
            <div className={styles["my-photo"]}></div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default AboutPage;
