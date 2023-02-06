import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BulbFilled,
  FileFilled,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import logo from "../../assets/icon.png";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const showBurgerManuHandler = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.fullNavBar}>
        <ul className={styles.navBarItemsContainer}>
          <li>
            <img src={logo} alt="Imagine Software" width="72px" />
          </li>
          <li className={styles.horizontalLine}></li>
          <li className={styles.fullNavBarItem}>
            <Link className={styles.removeLink} to="/">Home</Link>
          </li>
          <li className={styles.fullNavBarItem}>
            <Link className={styles.removeLink} to="/about">About</Link>
          </li>
          <li className={styles.fullNavBarItem}>
            <Link className={styles.removeLink} to="/contact">Contact</Link>
          </li>
          <li className={styles.fullNavBarItem}>
            <Link className={styles.removeLink} to="/team">Team</Link>
          </li>
        </ul>
        <ul className={styles.navBarItemsContainer}>
          <li className={styles.horizontalLine}></li>
          <li className={styles.fullNavBarItem}>
            <Link className={styles.removeLink} to="/joinus">
              <BulbFilled className={styles.icon} />
            </Link>
          </li>
          <li className={styles.fullNavBarItem}>
            <Link className={styles.removeLink} to="/projects">
              <FileFilled className={styles.icon} />
            </Link>
          </li>
          <li className={styles.fullNavBarItem}> </li>
        </ul>

        <ul className={styles.burgerNavBarButtons}>
          <li>
            <h3>Imagine Software</h3>
          </li>
          <li>
            <button
              className={styles.burgerButton}
              onClick={showBurgerManuHandler}
            > 
              {!showBurgerMenu ? <DownOutlined /> : <UpOutlined />}
            </button>
          </li>
        </ul>
      </nav>

      {showBurgerMenu && (
        <ul className={styles.burgerNavBar}>
          <li className={styles.burgerNavItem}>
            <Link className={styles.removeLink} to="/">Home</Link>
          </li>
          <li className={styles.burgerNavItem}>
            <Link className={styles.removeLink} to="/about">About</Link>
          </li>
          <li className={styles.burgerNavItem}>
            <Link className={styles.removeLink} to="/contact">Contact</Link>
          </li>
          <li className={styles.burgerNavItem}>
            <Link className={styles.removeLink} to="/team">Team</Link>
          </li>
          <li className={styles.burgerNavItem}>
            <Link className={styles.removeLink} to="/joinus">
              <span className={styles.icon}>Projects</span>
            </Link>
          </li>
          <li className={styles.burgerNavItem}>
            <Link className={styles.removeLink} to="/projects">
              <span className={styles.icon}>Join Us</span>
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default NavigationBar;
