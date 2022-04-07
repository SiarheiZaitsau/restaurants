import React from "react";
import styles from "./RestaurantCard.module.scss";
import { connect } from "react-redux";
import StarRatings from "react-star-ratings";
import { NavLink } from "react-router-dom";
function RestaurantCard(props) {
  return (
    <NavLink className={styles.restaurantLink} to={`/restaurant/${props.id}`}>
      <li key={props.id} className={styles.restaurant}>
        <div className={styles.restaurant__container}>
          <img
            className={styles.restaurant__img}
            alt="restaurantImg"
            src={props.img}
          />
          <div className={styles.restaurant__text}>
            <h4 className={styles.restaurant__title}>{props.name}</h4>
            <div className={styles.restaurant__type}>
              {props.foodTypes.map((food, index) => {
                if (index !== 0) {
                  return <span key={index}>, {food}</span>;
                }
                return <span key={index}>{food}</span>;
              })}
            </div>

            <div className={styles.rated}>
              <StarRatings
                rating={props.voteSum / props.voteAmount}
                starRatedColor="#F0AD4E"
                numberOfStars={5}
                name="rating"
                starDimension="15px"
                starSpacing="0px"
                // changeRating={
                //   isNotRated ? (evt) => setNewRating(evt, props.id) : () => {}
                // }
                isSelectable={true}
              />
              <span className={styles.voteAmount}>({props.voteAmount})</span>
            </div>
          </div>
        </div>
      </li>
    </NavLink>
  );
}
function mapStateToProps(state) {
  return {
    data: state.data,
  };
}
export default connect(mapStateToProps)(RestaurantCard);
