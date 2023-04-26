import React from 'react'
import styles from "../styles/header/header.module.css";
const Header = ({title}) => {
  return (
    <div>
      <h1 className={styles['page-title']}>{title}</h1>
    </div>
  )
}

export default Header
