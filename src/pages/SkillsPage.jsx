import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import SkillComponent from '../components/SkillComponent'
import {mySkills} from '../data/skills_information.js'

import styles from "../styles/pages/skills.module.css";

const SkillsPage = () => {
  return (
    <Fragment>
      <header>
        <Navbar/>
      </header>
    <main>
      <section className={styles['skills-title-container']}>
        <h1>Skills</h1>
        <p>Following is the list of programming languages and libraries that I have worked with</p>
      </section>
    {mySkills.map((skill) => (
            <SkillComponent
              key={skill.id}
              title={skill.title}
              description={skill.description}
              logo={skill.logo}
            />
          ))}

    </main>
    </Fragment>
  )
}

export default SkillsPage