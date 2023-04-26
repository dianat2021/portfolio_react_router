import { React, Fragment } from "react";
//STYLES
import sharedStyles from "../styles/sharedCSS/sharedcss.module.css";
import styles from "../styles/contact/Contact.module.css";
//COMPONENTS
import Navigation from "../components/Navigation";
import Button from "../components/Button";
import Header from "../components/Header";
//ICONS
import { MdOutlineLocationOn } from "react-icons/md";
import { BsEnvelope } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Contact = ({ burgerMenuStatus, burgerMenuHandler }) => {
  console.log(burgerMenuStatus);
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

        <div className={styles["Hamburger-menu-container"]}>
          <button onClick={burgerMenuHandler}>
            {burgerMenuStatus ? (
              <AiOutlineClose color="black" size={"2.5rem"} />
            ) : (
              <GiHamburgerMenu color="black" size={"2.5rem"} />
            )}
          </button>
        </div>

        <div className={styles["contact-title-container"]}>
          <Header title='CONTACT ME'/>
        </div>
        <div className={styles["contact-form-message"]}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nam
            aliquam cumque sunt consectetur rem praesentium quis deleniti sit
            beatae.
          </p>
        </div>

        <div className={styles["contact-form-container"]}>
          <form className={styles["contact-form"]}>
            <input type="text" placeholder="Enter your name" required />
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
            <textarea
              maxLength="200"
              placeholder="Max 200 characters"
              required
            />
            <Button value="Send" className={styles["send-button"]} />
          </form>
        </div>
        <div className={styles["contact-details-container"]}>
          <div className={styles["contact-details"]}>
            <p>
              <label>
                <MdOutlineLocationOn color="black" size={"2.5rem"} />
              </label>
              <span>Oslo, Norway</span>
            </p>
            <p>
              <label>
                <BsEnvelope color="black" size={"2.5rem"} />
              </label>
              <span> dianat.reza66@gmail.com</span>
            </p>
            <p>
              <label>
                <CgWebsite color="black" size={"2.5rem"} />
              </label>
              <span>SomethingSomething@github.com</span>
            </p>
          </div>
          <div className={styles["contact-soacial-media"]}>
            <a href="https://www.linkedin.com/in/mohammadreza-dianat-5ab75a209/">
              <FaLinkedin color="white" size={"3rem"} />
            </a>
            <a href="https://instagram.com/reza66459?igshid=ZDdkNTZiNTM=">
              <FaInstagram color="white" size={"3rem"} />
            </a>
            <a href="https://www.facebook.com/mohammad.r.dianat">
              <FaFacebook color="white" size={"3rem"} />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
