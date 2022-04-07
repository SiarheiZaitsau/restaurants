const initialState = [];

function data(state = initialState, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          foodTypes: action.payload.foodTypes,
          img: action.payload.img,
          voteSum: action.payload.voteSum,
          voteAmount: action.payload.voteAmount,
          dishesIds: action.payload.dishesIds,
          reviews: action.payload.reviews,
        },
      ];
    case "CHANGE_RATING":
      return state.map((item) => {
        if (item.id === action.id) {
          item.voteSum += action.sum;
          item.voteAmount += 1;
        }
        return item;
      });
    default:
      return state;
  }
}

export default data;
