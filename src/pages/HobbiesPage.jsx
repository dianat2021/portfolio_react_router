import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import { myhobbies } from "../data/hobbies_information";
import HobbyComponent from "../components/HobbyComponent";
import styles from "../styles/pages/hobbies.module.css";
import BackToTheTopButton from "../components/BackToTheTopButton";
const HobbiesPage = () => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <section className={styles["hobbies-title-container"]}>
          <h1>Hobbies</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            doloribus numquam reprehenderit repudiandae ipsa itaque corrupti
            unde repellat quidem asperiores.
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
        <BackToTheTopButton/>
      </main>
    </Fragment>
  );
};

export default HobbiesPage;
