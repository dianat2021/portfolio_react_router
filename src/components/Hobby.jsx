import React, { Fragment } from 'react'
import styles from "../styles/hobbyComponent/hobby.module.css";
const Skill = ({title,description,logo}) => {
  return (
    <Fragment>
        <div className={styles['hobbies-container']}>
            <div className={styles['hobbies-description']}>
                <h3 className={styles['hobbies-title']}>{title}</h3>
                <br></br>
                <p>{description}</p>
            </div>
            <div className={styles['hobbies-logo-container']}>
                <div className={styles['hobby-logo']}>{logo}</div>
            </div>
        </div>
    </Fragment>
  )
}

export default Skill
