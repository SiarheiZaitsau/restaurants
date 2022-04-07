import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import MenuDishes from "../MenuDishes/MenuDishes";
import styles from "./Menu.module.scss";
import Basket from "../Basket/Basket";
import SubNav from "../SubNav/SubNav";

function Menu(props) {
  const id = props.match.params.id || "";
  let data = useSelector((state) => state.data);
  let dishes = useSelector((state) => state.dishes);
  let [filteredDishes1, setFilteredDishes] = useState([]);
  let [dishesIds, setDishesIds] = useState([]);

  useEffect(() => {
    data.forEach((item) => {
      if (id === item.id) {
        setDishesIds(item.dishesIds);
      }
    });
  }, [data, id]);
  let dishFilter = useCallback(() => {
    let filteredDishes = [];
    filteredDishes = dishes.filter((dish) => {
      return dishesIds.includes(dish.id);
    });
    setFilteredDishes(filteredDishes);
  }, [dishes, dishesIds]);
  useEffect(() => {
    dishFilter();
  }, [dishesIds, dishFilter]);

  return (
    <>
      <SubNav />
      <div className={styles.menuContainer}>
        <ul className={styles.menu}>
          {filteredDishes1.map((dish) => {
            return (
              <MenuDishes
                key={dish.id}
                id={dish.id}
                name={dish.name}
                img={dish.img}
                priceUSD={dish.priceUSD}
                ingredients={dish.ingredients}
              />
            );
          })}
        </ul>
        <Basket />
      </div>
    </>
  );
}
export default Menu;
