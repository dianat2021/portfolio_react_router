import React, { Fragment } from "react";
//COMPONENTS
import Navbar from "../components/Navbar";
import CertificateComponent from "../components/CertificateComponent";
import BackToTheTopButton from "../components/BackToTheTopButton";
//DATA
import { myCertificates } from "../data/certificates_information";
//STYLES
import styles from "../styles/pages/certificates.module.css";

const CertificatesPage = () => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <section className={styles["certificates-title-container"]}>
          <h1>CERTIFICATES</h1>
          <p>
           Following is a short list of the courses that I participated in and certifications that I have achieved: 
          </p>
        </section>

        <section className={styles["certificates-container"]}>
          {myCertificates.map((item) => (
            <CertificateComponent
              key={item.key}
              logo={item.logo}
              course={item.course}
              lecturer={item.lecturer}
              hours={item.totalHours}
              courseHighlights={item.courseHighlights}
              link={item.link}
            />
          ))}
        </section>
        <BackToTheTopButton/>
      </main>
    </Fragment>
  );
};

export default CertificatesPage;
