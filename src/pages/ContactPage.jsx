import React, { Fragment, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/pages/contact.module.css";
//ICONS
import { BsEnvelope } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

import {
  formErrorStatus,
  formValidationHandler,
} from "../validation/validation";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const textareaElement = useRef();
  const [textareaLength, setTextareaLength] = useState(0);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [errorMessage, setErrorMessage] = useState({});

  const messageInputHandler = () => {
    setTextareaLength(textareaElement.current.value.length);
    setMessageInput(textareaElement.current.value);
  };
  const nameInputHandler = (e) => {
    // setErrorStatus(false);
    setNameInput(e.target.value);
  };
  const emailInputHandler = (e) => {
    // setErrorStatus(false);
    setEmailInput(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    setErrorMessage(formValidationHandler(nameInput, emailInput, messageInput));
    if (formErrorStatus()) {
      console.log("failed");
      return;
    } else {
      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      );
      setNameInput("");
      setEmailInput("");
      setMessageInput("");
      setTextareaLength(0)
    }
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
            <label className={styles["input-name"]}>Name:</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your fullname"
              value={nameInput}
              onChange={nameInputHandler}
            />
            <label className={styles["input-error"]}>
              {errorMessage.nameError}
            </label>

            <label className={styles["input-name"]}>Email:</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email address"
              value={emailInput}
              onChange={emailInputHandler}
            />
            <label className={styles["input-error"]}>
              {errorMessage.emailError}
            </label>

            <label className={styles["input-name"]}>Message:</label>
            <textarea
              maxLength="500"
              name="user_message"
              placeholder="Enter your message (Max 500 characters)"
              value={messageInput}
              ref={textareaElement}
              onChange={messageInputHandler}
            />
            <p className={styles["form-feedback-container"]}>
              <label className={styles["form-validation-message"]}>
                {errorMessage.messageError}
              </label>
              <label className={styles["message-counter-label"]}>
                {textareaLength ? textareaLength : 0}/500
              </label>
            </p>
            <button className={styles["send-button"]}>
              Send{<IoMdSend size={"1.5rem"} />}{" "}
            </button>
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
