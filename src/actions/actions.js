export const addRestaurant = (item) => ({
  type: "ADD_RESTAURANT",
  payload: {
    name: item.name,
    foodTypes: item.foodTypes,
    img: item.img,
    voteSum: item.voteSum,
    voteAmount: item.voteAmount,
    id: item.id,
    dishesIds: item.dishesIds,
    reviews: item.reviews
  },
})