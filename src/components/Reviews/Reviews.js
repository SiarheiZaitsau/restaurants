import React, { useState, useEffect } from "react";
import Review from "../Review/Review";
import styles from "./Reviews.module.scss";
import SubNav from "../SubNav/SubNav";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

function Reviews() {
  let data = useSelector((state) => state.data);
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState({});
  const [rating, setRating] = useState(0);
  useEffect(() => {
    const resData = data.filter((rest) => {
      return rest.id === id;
    });
    setRestaurantData(...resData);
  }, [data, id]);
  return (
    <>
      <SubNav />
      <div className={styles.container}>
        <ul className={styles.list}>
          {restaurantData?.reviews?.map((review, index) => {
            return (
              <Review
                name={review.name}
                text={review.text}
                rating={review.rating}
                key={review.name + review.text + index}
              />
            );
          })}
        </ul>
        <form className={styles.addReviewForm}>
          <h4 className={styles.addReviewTitle}>Leave your review</h4>
          <textarea className={styles.textarea}></textarea>
          <div className={styles.ratingContainer}>
            <span className={styles.ratingText}>Rating</span>
            <StarRatings
              rating={rating}
              changeRating={(evt) => setRating(evt)}
              starRatedColor="#F0AD4E"
              numberOfStars={5}
              name="rating"
              starDimension="15px"
              starSpacing="0px"
              isSelectable={true}
            />
          </div>
          <button className={styles.submit}>Publish review</button>
        </form>
      </div>
    </>
  );
}
export default Reviews;
