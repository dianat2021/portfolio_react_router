import React, { Fragment } from "react";
//STYLES
import styles from "../styles/hobbies/hobbies.module.css";
import sharedStyles from "../styles/sharedCSS/sharedcss.module.css";
import hamburgerMenu from "../styles/hamburgerMenu/hamburgerMenu.module.css";
//COMPONENTS
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Hobby from "../components/Hobby";
import HamburgerMenu from "../components/HamburgerMenu";
//DATA
import { myhobbies } from "../data/hobbies_information";

const Hobbies = ({ burgerMenuStatus, burgerMenuHandler }) => {
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
          <Header title="MY HOBBIES" />
        </header>
        <p className={styles["skills-message"]}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          doloribus numquam reprehenderit repudiandae ipsa itaque corrupti unde
          repellat quidem asperiores.
        </p>
        <section className={styles["skills-container"]}>
          {myhobbies.map((hobby) => (
            <Hobby
              key={hobby.id}
              title={hobby.title}
              description={hobby.description}
              logo={hobby.logo}
            />
          ))}
        </section>
      </div>
    </Fragment>
  );
};

export default Hobbies;
