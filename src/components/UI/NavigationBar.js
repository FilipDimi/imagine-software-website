import { useState } from "react";
import { BulbFilled, FileFilled, DownOutlined, UpOutlined } from "@ant-design/icons";
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
            <li className={styles.fullNavBarItem}>Home</li>
            <li className={styles.fullNavBarItem}>About</li>
            <li className={styles.fullNavBarItem}>Contact</li>
            <li className={styles.fullNavBarItem}>Team</li>
          </ul>
          <ul className={styles.navBarItemsContainer}>
            <li className={styles.horizontalLine}></li>
            <li className={styles.fullNavBarItem}>
              <BulbFilled className={styles.icon} />
            </li>
            <li className={styles.fullNavBarItem}>
              <FileFilled className={styles.icon} />
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
                { !showBurgerMenu ? <DownOutlined /> : <UpOutlined /> }
              </button>
            </li>
          </ul>
        </nav>

        {showBurgerMenu && (
          <ul className={styles.burgerNavBar}>
            <li className={styles.burgerNavItem}>Home</li>
            <li className={styles.burgerNavItem}>About</li>
            <li className={styles.burgerNavItem}>Contact</li>
            <li className={styles.burgerNavItem}>Team</li>
            <li className={styles.burgerNavItem}>
              <BulbFilled className={styles.icon} />
            </li>
            <li className={styles.burgerNavItem}>
              <FileFilled className={styles.icon} />
            </li>
          </ul>
        )}
      </header>
  );
};

export default NavigationBar;
