import React from "react";
import styles from "./SubNav.module.scss";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function SubNav(props) {
  const location = useLocation();
  let { id } = useParams();
  console.log(location.pathname.includes('restaurant'))
  const foodTypes = useSelector((state) => state.foodTypes);
  return (
    <div className={styles.subNavWrapper}>
      <ul className={styles.subNav}>
        {
          (!location.pathname.includes('restaurant')) ? (
        <>
        <li className={styles.subNavItem}>
          Cuisines:
        </li>
        <li className={styles.subNavItem}> <NavLink className={styles.link} exact activeClassName={styles.active} to="/">
                all
              </NavLink> </li>
        {foodTypes.map((el, index) => {
          return (
            <li key={index} className={styles.subNavItem}>
              <NavLink exact className={styles.link} activeClassName={styles.active} to={`${el}`}>
                {el}
              </NavLink>
            </li>
          );
        })}
            </>
          )
            : <>
                  <li className={styles.subNavItem}>
                   <NavLink className={styles.link} exact activeClassName={styles.active} to={`/restaurant/${id}`}> Menu </NavLink>
                  </li>
                  <li className={styles.subNavItem}>
                      <NavLink className={styles.link} exact activeClassName={styles.active} to={`/restaurant/${id}/reviews`}>Reviews </NavLink>
              </li>
            </>
        }
      </ul>
    </div>
  );
}
export default SubNav;
