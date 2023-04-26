import React, { Fragment } from "react";
//STYLES
import styles from "../styles/homePage/Home.module.css";
import sharedStyles from "../styles/sharedCSS/sharedcss.module.css";
//COMPONENTS
import Navigation from "../components/Navigation";
import Button from "../components/Button";
//ICONS
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Home = ({ burgerMenuStatus, burgerMenuHandler }) => {
  console.log(burgerMenuStatus);
  return (
    <Fragment>
      <div className={sharedStyles["grid-container"]}>
        <div className={styles["Hamburger-menu-container"]}>
          <button onClick={burgerMenuHandler}>
            {burgerMenuStatus ? (
              <AiOutlineClose color="black" size={"2.5rem"} />
            ) : (
              <GiHamburgerMenu color="black" size={"2.5rem"} />
            )}
          </button>
        </div>
        <nav
          className={
            burgerMenuStatus
              ? styles["main-nav__container__active"]
              : styles["main-nav__container"]
          }
        >
          <Navigation burgerMenuStatus={burgerMenuStatus} />
        </nav>

        <div className={styles["introduction-container"]}>
          <h1>Hi! I'm Mohammadreza Dianat</h1>
          <p className={styles["introduction-text"]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            facilis incidunt quidem! Incidunt ab nulla tempora, officiis
            voluptas ipsam voluptates dolore repellat, vitae, debitis dolor
            fugit possimus necessitatibus at aperiam nihil quam. Nihil harum
            mollitia quam et similique cupiditate distinctio labore repudiandae
            porro eum qui ad molestiae, accusamus reprehenderit fugiat?
          </p>
          <Button
            value="Contact"
            className={styles["introduction-contactButton"]}
          />
        </div>
        <div className={styles["photo-container"]}></div>
      </div>
    </Fragment>
  );
};

export default Home;
