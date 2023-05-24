import React, { Fragment } from 'react'
//STYLES
import styles from "../styles/components/hobbyComponent.module.css";

const HobbyComponent = ({title,description,logo}) => {
  return (
    <Fragment>
        <div className={styles['hobby-component-container']}>
            <div className={styles['hobby-description']}>
                <h2 className={styles['hobby-title']}>{title}</h2>
                <br></br>
                <p>{description}</p>
            </div>
            <div className={styles['hobby-logo-container']}>
                <div className={styles['hobby-logo']}>{logo}</div>
            </div>
        </div>
    </Fragment>
  )
}

export default HobbyComponent
