import React, { Fragment } from "react";
import styles from "../styles/certificates/certificates.module.css";
import sharedStyles from "../styles/sharedCSS/sharedcss.module.css";
import hamburgerMenu from "../styles/hamburgerMenu/hamburgerMenu.module.css";

import Navigation from "../components/Navigation";
import HamburgerMenu from "../components/HamburgerMenu";
import Header from "../components/Header";
import Certificate from "../components/certificate";

import { myCertificates } from "../data/certificates_information";
const Certificates = ({ burgerMenuStatus, burgerMenuHandler }) => {
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
          <Header title="MY CERTIFICATES" />
        </header>
        <p className={styles["certificates-message"]}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias eius
          nisi rem illum velit obcaecati. Quas ea minus voluptas quae.
        </p>
        <section className={styles["certificates-container"]}>
          {myCertificates.map((item) => (
            <Certificate
              logo={item.logo}
              course={item.course}
              lecturer={item.lecturer}
              hours={item.totalHours}
              courseHighlights={item.courseHighlights}
              link={item.link}
            />
          ))}
        </section>
      </div>
    </Fragment>
  );
};

export default Certificates;
