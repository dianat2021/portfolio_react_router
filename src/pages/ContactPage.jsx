import React, { Fragment, useRef, useState } from "react";
//COMPONENTS
import Navbar from "../components/Navbar";
import MessageSentWindow from "../components/MessageSentWindow";
import emailjs from "@emailjs/browser";
//ICONS
import { IoMdSend } from "react-icons/io";
//STYLES
import styles from "../styles/pages/contact.module.css";
//LOGIC
import {
  formErrorStatus,
  formValidationHandler,
} from "../validation/validation";

const ContactPage = () => {
  const textareaElement = useRef();
  const messageSentWindow = useRef();
  const backDrop = useRef();
  const [backDropStatus, setBackDropStatus] = useState(false);
  const [textareaLength, setTextareaLength] = useState(0);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [errorMessage, setErrorMessage] = useState({});

  const messageExceedHandler = () => {
    if (textareaLength === 500) return true;
    return false;
  };
  const messageInputHandler = () => {
    setTextareaLength(textareaElement.current.value.length);
    setMessageInput(textareaElement.current.value);
    messageExceedHandler();
  };
  const nameInputHandler = (e) => {
    setNameInput(e.target.value);
  };
  const emailInputHandler = (e) => {
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
      setTextareaLength(0);
      setBackDropStatus(true);
      messageSentWindow.current.style.top = "0px";
    }
  };

  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main className={styles["main-container"]}>
        {/*  ------------------------------------------------------------*/}
        <section
          className={backDropStatus ? styles.backdrop : ""}
          ref={backDrop}
        >
          <MessageSentWindow
            messageSentWindow={messageSentWindow}
            setBackDropStatus={setBackDropStatus}
          />
        </section>
        {/* ------------------------------------------- */}

        {/* ---------------------------------------------- */}
        <section className={styles["contact-form-container"]}>
          <div className={styles["contact-title-container"]}>
            <h1>CONTACT</h1>
          </div>
          <form className={styles["contact-form"]} onSubmit={submitFormHandler}>
            <label className={styles["input-name"]}>Name*</label>
            <input
              type="text"
              name="user_name"
              placeholder="Your full name"
              value={nameInput}
              autoComplete="off"
              onChange={nameInputHandler}
            />
            <label className={styles["input-error"]}>
              {errorMessage.nameError}
            </label>

            <label className={styles["input-name"]}>Email*</label>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email address"
              value={emailInput}
              autoComplete="off"
              onChange={emailInputHandler}
            />
            <label className={styles["input-error"]}>
              {errorMessage.emailError}
            </label>

            <label className={styles["input-name"]}>Message*</label>
            <textarea
              maxLength="500"
              name="user_message"
              placeholder="Your message (Max 500 characters)"
              value={messageInput}
              ref={textareaElement}
              onChange={messageInputHandler}
            />
            <p className={styles["form-feedback-container"]}>
              <label className={styles["form-validation-message"]}>
                {errorMessage.messageError}
              </label>
              <label
                className={
                  messageExceedHandler() ? styles["exceeded-message-limit"] : ""
                }
              >
                {textareaLength ? textareaLength : 0}/500
              </label>
            </p>
            <button className={styles["send-button"]}>
              Send
              {
                <IoMdSend size={window.innerWidth <= 420 ? "2rem" : "1.5rem"} />
              }{" "}
            </button>
          </form>
        </section>
        {/* ------------------------------------------------- */}
        <section className={styles["contact-photo-container"]}>
          <div className={styles["contact-photo"]}>
            {/* <h1 className={styles["contact-title"]}>CONTACT ME</h1> */}
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default ContactPage;
