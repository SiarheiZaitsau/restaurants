import React from "react";
import cn from "classnames";
import { useSelector, useDispatch } from "react-redux";
import styles from "./MenuDishes.module.scss";

function MenuDishes(props) {
  let { name, id, priceUSD, ingredients } = props;
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  let dishToBasket = (id, name, priceUSD) => {
    dispatch({
      type: "DISH_TO_BASKET",
      payload: {
        id: id,
        name: name,
        priceUSD: priceUSD,
        amount: 1,
      },
    });
  };
  let removeDishFromBasket = (id) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: {
        id: id,
      },
    });
  };
  return (
    <li className={styles.dish}>
      <div className={styles.dish__container}>
        <div className={styles.dish__contentContainer}>
          <h4 className={styles.dish__name}> {name}</h4>
          <div>
            {ingredients.map((ingredient, index) => {
              if (index === 0) {
                return (
                  <span className={styles.ingredient} key={index}>
                    {ingredient}
                  </span>
                );
              } else
                return (
                  <span className={styles.ingredient} key={index}>
                    , {ingredient}
                  </span>
                );
            })}
          </div>
          <span className={styles.dish__price}> {priceUSD} $</span>
        </div>
        <div className={styles.dish__number}>
          {basket.find((el) => el.id === id) ? (
            basket.map((dish) => {
              /// ???
              if (dish.id === id) {
                return (
                  <span key={dish.id} className={styles.dish__orderNumber}>
                    {dish.amount}
                  </span>
                );
              } else return undefined;
            })
          ) : (
            <span className={styles.dish__orderNumber}> 0 </span>
          )}

          <div className={styles.dish__buttonContainer}>
            <button
              onClick={() => removeDishFromBasket(id)}
              className={cn(styles.dish__button, styles.minusButton)}
              disabled={!basket.find((el) => el.id === id)}
            >
              -
            </button>
            <button
              onClick={() => dishToBasket(id, name, priceUSD)}
              className={cn(styles.dish__button, styles.plusButton)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
export default MenuDishes;
