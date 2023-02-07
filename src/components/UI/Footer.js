import React from 'react'
import styles from './Footer.module.css';
import { FacebookFilled, InstagramFilled, LinkedinFilled } from "@ant-design/icons";
import logo from '../../assets/icon.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerBlock}>
            <img src={logo} style={{width: "380px"}}/>
        </div>
        <div className={styles.footerBlock}>
            <h2>Imagine Software</h2>
            <div>
                <button className={styles.socialMediaButton}><FacebookFilled /></button>
                <button className={styles.socialMediaButton}><InstagramFilled /></button>
                <button className={styles.socialMediaButton}><LinkedinFilled /></button>
            </div>
        </div>
        <div className={styles.footerBlock}>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Home</li>
                <li>Our Team</li>
                <li>Projects</li>
                <li>Join Us</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer