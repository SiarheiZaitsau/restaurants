
const initialState = [];

function foodTypes(state = initialState, action) {
  switch (action.type) {
    case "ADD_FOODTYPES":
      return [...state, ...action.payload.foodTypes];

    default:
      return state;
  }
}

export default foodTypes;
