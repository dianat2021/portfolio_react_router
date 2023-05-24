import React, { useState, useEffect, Fragment } from "react";
//STYLES
import styles from "../styles/components/backtothetopbutton.module.css";
//COMPONENTS
import Tooltip from "@mui/material/Tooltip";

const BackToTheTopButton = () => {
  const [backToTheTopBtn, setBackToTheTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTheTopBtn(true);
      } else {
        setBackToTheTopBtn(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Fragment>
      {backToTheTopBtn && (
        <Tooltip title="Scroll To Top" placement="top" arrow={true}>
          <button onClick={scrollToTop} className={styles["back-to-top-btn"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#f58750"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <path d="M245 0L74.3 213.3 202.3 213.3 202.3 512 287.7 512 287.7 213.3 415.7 213.3z"></path>
            </svg>
          </button>
        </Tooltip>
      )}
    </Fragment>
  );
};

export default BackToTheTopButton;
