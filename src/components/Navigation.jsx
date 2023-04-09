import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import styles from "../styles/navigation/Navigation.module.css";
const Navigation = ({burgerMenuStatus}) => {
  
const navLinkStyleHandler = ({isActive})=>{
  return{
    color: isActive ? 'orange': ''
  }
}

  return (
    <Fragment>
      <nav className={styles["main-nav"]}>
        <ul className={burgerMenuStatus? styles["main-nav__pages__burger"]:styles["main-nav__pages"]}>   
          <NavLink to="/" className={styles.navLink  } style={navLinkStyleHandler}>Home</NavLink>
          <NavLink to="about" className={styles.navLink} style={navLinkStyleHandler}>About</NavLink>
          <NavLink to="skills" className={styles.navLink} style={navLinkStyleHandler}>Skills</NavLink>
          <NavLink to="hobbies" className={styles.navLink} style={navLinkStyleHandler}>Hobbies</NavLink>
          <NavLink to="certificates" className={styles.navLink} style={navLinkStyleHandler}>Certificates</NavLink>
          <NavLink to="contact" className={styles.navLink} style={navLinkStyleHandler}>Contact</NavLink>
        </ul>
        <div className={styles["main-nav__iconsContainer"]}>
          <a href="https://www.linkedin.com/in/mohammadreza-dianat-5ab75a209/"><FaLinkedin color="white" size={'2rem'}/></a>
          <a href="https://instagram.com/reza66459?igshid=ZDdkNTZiNTM="><FaInstagram color="white" size={'2rem'}/></a>
          <a href="https://www.facebook.com/mohammad.r.dianat"><FaFacebook color="white" size={'2rem'}/></a>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navigation;
