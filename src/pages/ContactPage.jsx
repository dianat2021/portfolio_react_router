import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/pages/contact.module.css";
//ICONS
import { MdOutlineLocationOn } from "react-icons/md";
import { BsEnvelope } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const ContactPage = () => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <section className={styles["contact-title-container"]}>
          <h1>Contact</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nam
            aliquam cumque sunt.
          </p>
        </section>

        <section className={styles["contact-form-container"]}>
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
            <button className={styles["send-button"]}>Send</button>
          </form>
          <div className={styles["contact-details-container"]}>
            <p>
              <label>
                <MdOutlineLocationOn color="#122954" size={"3rem"} />
              </label>
              <span>Oslo, Norway</span>
            </p>
            <p>
              <label>
                <BsEnvelope color="#122954" size={"3rem"} />
              </label>
              <span> dianat.reza66@gmail.com</span>
            </p>
            <p>
              <label>
                <CgWebsite color="#122954" size={"3rem"} />
              </label>
              <span>SomethingSomething@github.com</span>
            </p>
            <a href="https://www.linkedin.com/in/mohammadreza-dianat-5ab75a209/">
              <FaLinkedin color="#0072b1" size={"3rem"} />
            </a>
            <a href="https://instagram.com/reza66459?igshid=ZDdkNTZiNTM=">
              <FaGitSquare color="#f34f29" size={"3rem"} />
            </a>
          </div>
        </section>
        {/* <form className={styles["contact-form-container"]}>
          

        <div className={styles["contact-details-container"]}>
          <div className={styles["contact-details"]}>
           
          </div>
          <div className={styles["contact-soacial-media"]}>
           
          </div>
        </div> */}
      </main>
    </Fragment>
  );
};

export default ContactPage;
