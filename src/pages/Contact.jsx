import { React, Fragment } from "react";
//STYLES
import sharedStyles from "../styles/sharedCSS/sharedcss.module.css";
import styles from "../styles/contact/Contact.module.css";
import hamburgerMenu from "../styles/hamburgerMenu/hamburgerMenu.module.css";
//COMPONENTS
import Navigation from "../components/Navigation";
import Button from "../components/Button";
import Header from "../components/Header";
import HamburgerMenu from "../components/HamburgerMenu";
//ICONS
import { MdOutlineLocationOn } from "react-icons/md";
import { BsEnvelope } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaGitSquare } from 'react-icons/fa'
import { FaFacebook } from "react-icons/fa";

const Contact = ({ burgerMenuStatus, burgerMenuHandler }) => {
  const sendMessageHandler = ()=>{
    alert("Hi!")
  }
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
        <div className={styles["contact-title-container"]}>
          <Header title="CONTACT ME" />
        </div>
        <div className={styles["contact-form-message"]}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nam
            aliquam cumque sunt.
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
              placeholder="Enter your message (Max 500 characters)"
              required
            />
            <Button value="Send" className={styles["send-button"]} onClick={sendMessageHandler}/>
          </form>
        </div>
        <div className={styles["contact-details-container"]}>
          <div className={styles["contact-details"]}>
            <p>
              <label>
                <MdOutlineLocationOn color="#122954" size={"2.5rem"} />
              </label>
              <span>Oslo, Norway</span>
            </p>
            <p>
              <label>
                <BsEnvelope color="#122954" size={"2.5rem"} />
              </label>
              <span> dianat.reza66@gmail.com</span>
            </p>
            <p>
              <label>
                <CgWebsite color="#122954" size={"2.5rem"} />
              </label>
              <span>SomethingSomething@github.com</span>
            </p>
          </div>
          <div className={styles["contact-soacial-media"]}>
            <a href="https://www.linkedin.com/in/mohammadreza-dianat-5ab75a209/">
              <FaLinkedin color="#0072b1" size={"3rem"} />
            </a>
            <a href="https://instagram.com/reza66459?igshid=ZDdkNTZiNTM=">
              <FaGitSquare color="#f34f29" size={"3rem"} />
            </a>
            {/* <a href="https://www.facebook.com/mohammad.r.dianat">
              <FaFacebook color="#3b5998" size={"3rem"} />
            </a> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
