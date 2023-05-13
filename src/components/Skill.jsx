import React, { Fragment } from 'react'
import styles from "../styles/skillComponent/skill.module.css";
const Skill = ({title,description,logo}) => {
  return (
    <Fragment>
        <div className={styles['skill-container']}>
            <div className={styles['skill-description']}>
                <h2 className={styles['skill-title']}>{title}</h2>
                <br></br>
                <p>{description}</p>
            </div>
            <div className={styles['skill-logo-container']}>
                <div className={styles['skill-logo']}>{logo}</div>
            </div>
        </div>
    </Fragment>
  )
}

export default Skill
