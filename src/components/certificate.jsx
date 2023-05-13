import React, { Fragment } from "react";
import styles from "../styles/certificateComponent/certificate.module.css";
import { myCertificates } from "../data/certificates_information";
const certificate = ({
  logo,
  course,
  lecturer,
  hours,
  courseHighlights,
  link,
}) => {
  return (
    <Fragment>
      <div className={styles["certificate-container"]}>
        <section className={styles["certificate-logo-container"]}>
          <div className={styles["certificate-logo"]}>{logo}</div>
        </section>
        <section className={styles["certificate-decription-container"]}>
          <div className={styles["certificate-information"]}>
            <p>
              <b>Course:</b> {course}
            </p>
            <p>
              <b>Lecturer:</b> {lecturer}
            </p>
            <p>
              <b>Total Hours:</b> {hours}
            </p>
            <p>
              <b>Course Highlights:</b> {courseHighlights}
            </p>
          </div>
          <div className={styles["certificates-links"]}>
            <a href={link} target="_blank">
              View Certificate
            </a>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default certificate;
