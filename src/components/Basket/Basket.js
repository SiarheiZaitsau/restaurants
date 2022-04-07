import React from "react";
import styles from "./Basket.module.scss";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";
function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  let plusDishToStore = (id, name, priceUSD) => {
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
  let sum = 0;
  let minusDishToStore = (id) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: {
        id: id,
      },
    });
  };
  return (
    <div className={styles.basketContainer}>
      {basket.length === 0 ? (
        <div className={styles.emptyBasket}>
          <p className={styles.emptyBasket__txt}>Select a meal from the list</p>
        </div>
      ) : (
        <div className={styles.basketNotEmpty}>
          <h3 className={styles.basketTitle}> Basket </h3>
          <ul className={styles.basket}>
            {basket.map((dish) => {
              sum += dish.priceUSD * dish.amount;
              return (
                <li key={dish.id} className={styles.basketItem}>
                  <p className={styles.dishName}>{dish.name}</p>
                  <div className={styles.counter}>
                    <button
                      className={styles.button}
                      onClick={() => minusDishToStore(dish.id)}
                    >
                      -
                    </button>
                    <span className={styles.amount}>{dish.amount}</span>
                    <button
                      className={cn(styles.button, styles.minusButton)}
                      onClick={() =>
                        plusDishToStore(dish.id, dish.name, dish.priceUSD)
                      }
                    >
                      +
                    </button>
                  </div>
                  <span className={styles.price}>
                    {(dish.priceUSD * dish.amount).toFixed(2)}$
                  </span>
                </li>
              );
            })}
          </ul>
          <hr className={styles.separator} />
          <div className={cn(styles.basketItem)}>
            <p className={styles.dishName}>Sub-total</p>
            <p className={styles.price}> {sum.toFixed(2)}$ </p>
          </div>
          <div className={cn(styles.basketItem)}>
            <p className={styles.dishName}>Delivery costs:</p>
            <p className={styles.price}>free </p>
          </div>
          <div className={cn(styles.basketItem, styles.totalPrice)}>
            <p className={styles.dishName}>total</p>
            <p className={styles.price}> {sum.toFixed(2)}$ </p>
          </div>
          <button className={styles.submit}>Checkout</button>
        </div>
      )}
    </div>
  );
}
export default Basket;
