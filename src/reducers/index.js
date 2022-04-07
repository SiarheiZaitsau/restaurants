import { combineReducers } from "redux";
import data from "./App";
import foodTypes from "./foodTypes";
import dishes from "./dishes";
import basket from "./basket";
const rootReducer = combineReducers({
  data: data,
  foodTypes: foodTypes,
  dishes: dishes,
  basket: basket,
});

export default rootReducer;
