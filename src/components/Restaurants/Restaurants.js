import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Restaurants.module.scss";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import SubNav from "../SubNav/SubNav";

function Restaurants(props) {
  let data = useSelector((state) => state.data);
  const foodType = props.match.params.foodType || "all";
  let [newData, setNewData] = useState([]);
  useEffect(() => {
    if (foodType.toString() === "all") {
      setNewData(data);
    } else {
      setNewData(
        data.filter((item) => {
          return item.foodTypes.includes(foodType.toString());
        })
      );
    }
  }, [data, foodType]);
  return (
    <div>
      <SubNav />
      <ul className={styles.restaurants}>
        {newData.map((item) => {
          return (
            <RestaurantCard
              key={item.id + item}
              name={item.name}
              id={item.id}
              foodTypes={item.foodTypes}
              img={item.img}
              voteSum={item.voteSum}
              voteAmount={item.voteAmount}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Restaurants;
