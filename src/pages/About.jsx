import React from "react";
import Navigation from "../components/Navigation";
import styles from "../styles/about/about.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const About = ({ burgerMenuStatus, burgerMenuHandler }) => {
  return (
    <div className={styles["grid-container"]}>
      <nav className={styles["Hamburger-menu-container"]}>
        <button onClick={burgerMenuHandler}>
          {burgerMenuStatus ? (
            <AiOutlineClose color="black" size={"2.5rem"} />
          ) : (
            <GiHamburgerMenu color="black" size={"2.5rem"} />
          )}
        </button>
      </nav>
      <nav
        className={
          burgerMenuStatus
            ? styles["main-nav__container__active"]
            : styles["main-nav__container"]
        }
      >
        <Navigation burgerMenuStatus={burgerMenuStatus} />
      </nav>
      <div className={styles["page-title-container"]}>
        <h1>ABOUT ME</h1>
      </div>
      <section className={styles.biography}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          porro sunt totam, qui sequi voluptates error voluptatibus dolorum
          ullam iure nam. Eum beatae quos nobis consequatur sed a, tenetur non
          saepe, labore delectus eligendi iusto quas officia amet velit id
          maiores aperiam numquam voluptatum at animi incidunt in sapiente
          cupiditate! Nam velit, aperiam dolorum ipsum, vel ut consequatur
          dignissimos quae autem perferendis quibusdam nihil magni voluptatem
          aut quisquam, nisi quidem illum harum dolor amet cum hic recusandae.
        </p>
      </section>
      <section className={styles["photo-container"]}>
        <div className={styles["my-photo"]}></div>
      </section>
    </div>
  );
};

export default About;
