import React from 'react'
// import styles from "../styles/button/button.module.css";
const Button = ({value, className, onClick}) => {
  return (
    <button onClick={onClick} className={className}>
        {value}
    </button>
  )
}

export default Button
