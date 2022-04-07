import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import logo from '../../img/logo.svg';
function Header() {
  return (
    <div className={styles.headerContainer}>
      <NavLink to="/">
        <img alt='logo' className={styles.logo} src={logo} />
      </NavLink>
    </div>
  );
}
export default Header;
