import React from "react";
import styles from "./Review.module.scss";
import StarRatings from "react-star-ratings";

function Reviews(props) {
  const { name, text, rating } = props;

  return (
    <li className={styles.review}>
      <p className={styles.name}>{name}</p>
      <p className={styles.text}>{text}</p>
      <div className={styles.rating}>
        <StarRatings
          rating={rating}
          starRatedColor="#F0AD4E"
          numberOfStars={5}
          name="rating"
          starDimension="15px"
          starSpacing="0px"
          isSelectable={true}
        />
      </div>
    </li>
  );
}
export default Reviews;
