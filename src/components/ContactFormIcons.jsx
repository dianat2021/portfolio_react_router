import React, { Fragment, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import styles from "../styles/components/contactformicons.module.css";
import { BsEnvelope } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const ContactFormIcons = () => {
  const [emailIsInClipboard, setemailIsInClipboard] = useState(false);

  const copyEmailToClipboardHandler = async () => {
    const clipboardItems = await navigator.clipboard.writeText(
      "dianat.reza66@gmail.com"
    );
    setemailIsInClipboard(true);
    console.log(clipboardItems);
  };
  const checkClipboardContent = async () => {
    const clipboardItems = await navigator.clipboard.readText();
    if (clipboardItems === "dianat.reza66@gmail.com") {
      setemailIsInClipboard(true);
    } else {
      setemailIsInClipboard(false);
    }
  };

  return (
    <Fragment>
      <div className={styles["contact-form-icons"]}>
        <h1 className={styles['page-title']}>CONTACT ME</h1>
        <section className={styles["icons-container"]}>
        <Tooltip title="LinkedIn Profile" placement="right" arrow={true}>
          <a href="https://www.linkedin.com/in/mohammadreza-dianat-5ab75a209/">
            <FaLinkedin
              color="#f58750"
              size={'2.6rem'}
              className={styles["contact-icons"]}
            />
          </a>
        </Tooltip>
        <Tooltip
          title={
            emailIsInClipboard ? "Email copied" : "Copy Email to clipboard"
          }
          placement="right"
          arrow={true}
        >
          <button
            style={{ background: "none", border: "none", cursor: "pointer" }}
            onClick={copyEmailToClipboardHandler}
            onMouseEnter={checkClipboardContent}
          >
            <BsEnvelope
              color="#f58750"
              size={'2.6rem'}
              className={styles["contact-icons"]}
            />
          </button>
        </Tooltip>

        <Tooltip title="Github repository" placement="right" arrow={true}>
          <a href="https://instagram.com/reza66459?igshid=ZDdkNTZiNTM=">
            <FaGitSquare
              color="#f58750"
              size={'2.6rem'}
              className={styles["contact-icons"]}
            />
          </a>
        </Tooltip>
        <Tooltip title="Facebook account" placement="right" arrow={true}>
          <a href="https://instagram.com/reza66459?igshid=ZDdkNTZiNTM=">
            <FaFacebookSquare
              color="#f58750"
              size={'2.6rem'}
              className={styles["contact-icons"]}
            />
          </a>
        </Tooltip>
        </section>
      </div>
      
    </Fragment>
  );
};

export default ContactFormIcons;
