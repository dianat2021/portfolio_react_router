import React, { Fragment } from "react";
//STYLES
import styles from "../styles/skills/skills.module.css";
import sharedStyles from "../styles/sharedCSS/sharedcss.module.css";
import hamburgerMenu from "../styles/hamburgerMenu/hamburgerMenu.module.css";
//COMPONENTS
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Skill from "../components/Skill";
import HamburgerMenu from "../components/HamburgerMenu";
//DATA
import { mySkills } from "../data/skills_information";

const Skills = ({ burgerMenuStatus, burgerMenuHandler }) => {
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
          <Navigation burgerMenuStatus={burgerMenuStatus} />
        </nav>
        <nav>
          <HamburgerMenu
            burgerMenuStatus={burgerMenuStatus}
            burgerMenuHandler={burgerMenuHandler}
          />
        </nav>
        <header className={styles["page-title-container"]}>
          <Header title="MY SKILLS" />
        </header>
        <p className={styles["skills-message"]}>
          Following is the list of programming languages and libraries that i can work with. 
        </p>
        <section className={styles["skills-container"]}>
          {mySkills.map((skill) => (
            <Skill
              key={skill.id}
              title={skill.title}
              description={skill.description}
              logo={skill.logo}
            />
          ))}
        </section>
      </div>
    </Fragment>
  );
};

export default Skills;
