import React, { Fragment, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/pages/contact.module.css";
//ICONS
import { BsEnvelope } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";

import { formValidationHandler } from "../validation/validation";
const ContactPage = () => {
  const textareaElement = useRef();
  const inputElements = useRef("input");
  const [textareaLength, setTextareaLength] = useState(0);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);

  console.log(inputElements);
  const messageInputHandler = () => {
    setErrorMessage("");
    setTextareaLength(textareaElement.current.value.length);
    setMessageInput(textareaElement.current.value);
  };
  const nameInputHandler = (e) => {
    setErrorMessage("");
    setErrorStatus(false);
    setNameInput(e.target.value);
  };
  const emailInputHandler = (e) => {
    setErrorMessage("");
    setErrorStatus(false);
    setEmailInput(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    formValidationHandler(
      nameInput,
      emailInput,
      messageInput,
      setErrorStatus,
      setErrorMessage
    );
  };
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
          <form className={styles["contact-form"]} onSubmit={submitFormHandler}>
            <input
              type="text"
              placeholder="Enter your name"
              onChange={nameInputHandler}
            />
            <input
              type="email"
              placeholder="Enter your email address"
              onChange={emailInputHandler}
            />
            <textarea
              maxLength="500"
              placeholder="Enter your message (Max 500 characters)"
              ref={textareaElement}
              onChange={messageInputHandler}
            />
            <p className={styles["form-feedback-container"]}>
              <label className={styles["form-validation-message"]}>
                {errorStatus ? errorMessage : ""}
              </label>
              <label className={styles["message-counter-label"]}>
                {textareaLength ? textareaLength : 0}/500
              </label>
            </p>
            <button className={styles["send-button"]}>Send</button>
          </form>
          <div className={styles["contact-details-container"]}>
            <span className={styles["contact-details-item"]}>
              <a href="https://www.linkedin.com/in/mohammadreza-dianat-5ab75a209/">
                <FaLinkedin
                  color="#122954"
                  size={"4rem"}
                  className={styles["contact-details-icons"]}
                />
              </a>
            </span>
            <span className={styles["contact-details-item"]}>
              <BsEnvelope
                color="#122954"
                size={"4rem"}
                className={styles["contact-details-icons"]}
              />
            </span>
            <span className={styles["contact-details-item"]}>
              <a href="https://instagram.com/reza66459?igshid=ZDdkNTZiNTM=">
                <FaGitSquare
                  color="#122954"
                  size={"4rem"}
                  className={styles["contact-details-icons"]}
                />
              </a>
            </span>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default ContactPage;
