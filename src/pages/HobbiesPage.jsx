import React, { Fragment } from "react";
//COMPONENTS
import Navbar from "../components/Navbar";
import HobbyComponent from "../components/HobbyComponent";
import BackToTheTopButton from "../components/BackToTheTopButton";
//DATA
import { myhobbies } from "../data/hobbies_information";
//STYLES
import styles from "../styles/pages/hobbies.module.css";

const HobbiesPage = () => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <section className={styles["hobbies-title-container"]}>
          <h1>HOBBIES</h1>
          <p>
            Following is the list of activities that I usually do in my free
            time.
          </p>
        </section>

        <section className={styles["hobbies-container"]}>
          {myhobbies.map((hobby) => (
            <HobbyComponent
              key={hobby.id}
              title={hobby.title}
              description={hobby.description}
              logo={hobby.logo}
            />
          ))}
        </section>
        <BackToTheTopButton />
      </main>
    </Fragment>
  );
};

export default HobbiesPage;
