const initialState = [];

function basket(state = initialState, action) {
  switch (action.type) {
    case "DISH_TO_BASKET": {
      const isDishExist = state.some((el) => el.id === action.payload.id);
      let newState = [...state];
      if (isDishExist) {
        newState = state.map((item) => {
          if (item.id === action.payload.id) {
            item.amount += 1;
          }
          return item;
        });
      } else {
        newState.push(action.payload);
      }
      return newState;
    }
    case "REMOVE_FROM_BASKET": {
      const dish = state.find((el) => el.id === action.payload.id);
      if (dish.amount < 2) {
        return state.filter((dish) => dish.id !== action.payload.id);
      }
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            id: item.id,
            name: item.name,
            priceUSD: item.priceUSD,
            amount: item.amount - 1,
          };
        }
        return item;
      });
    }

    default:
      return state;
  }
}

export default basket;
