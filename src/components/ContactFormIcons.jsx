import React, { Fragment, useState } from "react";
//STYLES
import styles from "../styles/components/contactformicons.module.css";
//COMPONENTS
import Tooltip from "@mui/material/Tooltip";
//ICONS
import { BsEnvelope } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const ContactFormIcons = ({emailCopiedParagraph}) => {
  const [emailIsInClipboard, setemailIsInClipboard] = useState(false);

  const copyEmailToClipboardHandler = async () => {
    const clipboardItems = await navigator.clipboard.writeText(
      "dianat.reza66@gmail.com"
    );
    emailCopiedParagraph.current.style.left = '0px'
    setTimeout(() => {
    emailCopiedParagraph.current.style.left = '-300px'
    }, 3000);
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
        <section className={styles["icons-container"]}>
          <Tooltip title="LinkedIn Profile" placement="bottom" arrow={true}>
            <a href="https://www.linkedin.com/in/mohammadreza-dianat-5ab75a209/" target="_blank">
              <FaLinkedin
                color="#f58750"
                size={"2.2rem"}
                className={styles["contact-icons"]}
              />
            </a>
          </Tooltip>
          <Tooltip
            title={
              emailIsInClipboard ? "Email copied" : "Copy Email to clipboard"
            }
            placement="bottom"
            arrow={true}
           
          >
            <button
              style={{ background: "none", border: "none", cursor: "pointer" }}
              onClick={copyEmailToClipboardHandler}
              onMouseEnter={checkClipboardContent}
            >
              <BsEnvelope
                color="#f58750"
                size={"2.2rem"}
                className={styles["contact-icons"]}
                // onClick={()=> alert('hi')}
              />
            </button>
          </Tooltip>

          <Tooltip title="Github repository" placement="bottom" arrow={true} >
            <a href="https://github.com/dianat2021" target="_blank">
              <FaGitSquare
                color="#f58750"
                size={"2.2rem"}
                className={styles["contact-icons"]}
              />
            </a>
          </Tooltip>
          <Tooltip title="Facebook account" placement="bottom" arrow={true}>
            <a href="https://www.facebook.com/mohammad.r.dianat" target="_blank">
              <FaFacebookSquare
                color="#f58750"
                size={"2.2rem"}
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
