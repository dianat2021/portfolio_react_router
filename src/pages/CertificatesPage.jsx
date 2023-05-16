import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import { myCertificates } from "../data/certificates_information";
import CertificateComponent from "../components/CertificateComponent";
import styles from "../styles/pages/certificates.module.css";
const CertificatesPage = () => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <section className={styles["certificates-title-container"]}>
          <h1>Certificates</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias eius
            nisi rem illum velit obcaecati. Quas ea minus voluptas quae.
          </p>
        </section>

        <section className={styles["certificates-container"]}>
          {myCertificates.map((item) => (
            <CertificateComponent
              logo={item.logo}
              course={item.course}
              lecturer={item.lecturer}
              hours={item.totalHours}
              courseHighlights={item.courseHighlights}
              link={item.link}
            />
          ))}
        </section>
      </main>
    </Fragment>
  );
};

export default CertificatesPage;
