import React, { Fragment } from "react";
//STYLES
import styles from "../styles/components/certificateComponent.module.css";

const CertificateComponent = ({
  logo,
  course,
  lecturer,
  hours,
  courseHighlights,
  link,
}) => {
  return (
    <Fragment>
      <main className={styles['certificates-main-container']}>
        <section className={styles["certificate-logo-container"]}>
          <div className={styles["certificate-logo"]}>{logo}</div>
        </section>

        <section className={styles["certificate-description-container"]}>
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
      </main>
    </Fragment>
  );
};

export default CertificateComponent;
