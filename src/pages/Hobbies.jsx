import React, { Fragment } from "react";
//STYLES
import styles from "../styles/skills/skills.module.css";
import sharedStyles from "../styles/sharedCSS/sharedcss.module.css";
//COMPONENTS
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Skill from "../components/Skill";
//DATA
import { myhobbies } from "../data/hobbies_information";

const Skills = ({ burgerMenuStatus, burgerMenuHandler }) => {
  return (
    <Fragment>
      <div className={sharedStyles["grid-container"]}>
        <nav
          className={
            burgerMenuStatus
              ? styles["main-nav__container__active"]
              : styles["main-nav__container"]
          }
        >
          <Navigation burgerMenuStatus={burgerMenuStatus} />
        </nav>

        <header className={styles["page-title-container"]}>
          <Header title="MY HOBBIES" />
        </header>
        <p className={styles['skills-message']}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum doloribus numquam reprehenderit repudiandae ipsa itaque corrupti unde repellat quidem asperiores.
        </p>
        <section className={styles['skills-container']}>
          {myhobbies.map(skill => <Skill key={skill.id} title={skill.title} description={skill.description} logo={skill.logo}/>)}
        </section>
      </div>
    </Fragment>
  );
};

export default Skills;
