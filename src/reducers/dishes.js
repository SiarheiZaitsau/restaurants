const initialState = [];

function dishes(state = initialState, action) {
  switch (action.type) {
    case "ADD_DISHES":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          img: action.payload.img,
          priceUSD: action.payload.priceUSD,
          ingredients: action.payload.ingredients,
        },
      ];
    default:
      return state;
  }
}

export default dishes;
