import React from "react";
import styles from "./Footer.module.css";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import logo from "../../assets/icon.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBlock}>
        <h2 style={{whiteSpace: "nowrap"}}>Imagine Software</h2>
        <div className={styles.footerButtons}>
          <button className={styles.socialMediaButton}>
            <FacebookFilled />
          </button>
          <button className={styles.socialMediaButton}>
            <InstagramFilled />
          </button>
          <button className={styles.socialMediaButton}>
            <LinkedinFilled />
          </button>
        </div>
      </div>
      <div className={styles.footerBlock}>
        <img src={logo} alt="Imagine Software" style={{ width: "380px" }} />
      </div>
    </footer>
  );
};

export default Footer;
