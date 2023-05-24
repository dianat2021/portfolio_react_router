import React, { Fragment } from 'react';
//STYLES
import styles from "../styles/components/skillComponent.module.css";
const SkillComponent = ({title,description,logo}) => {
  return (
    <Fragment>
        <div className={styles['skill-component-container']}>
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

export default SkillComponent
