import React, { useEffect } from "react";
import "./App.css";
import Restaurants from "./components/Restaurants/Restaurants";
import dishes from "./dishes";
import restaurants from "./data";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import Reviews from "./components/Reviews/Reviews";
import { addRestaurant } from "./actions/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const foodTypes = [];
    restaurants.forEach((item) => {
      dispatch(addRestaurant(item));
      foodTypes.push(...item.foodTypes);
    });
    dishes.forEach((dish) => {
      dispatch({
        type: "ADD_DISHES",
        payload: {
          name: dish.name,
          id: dish.id,
          img: dish.img,
          priceUSD: dish.priceUSD,
          ingredients: dish.ingredients,
        },
      });
    });

    dispatch({
      type: "ADD_FOODTYPES",
      payload: {
        foodTypes: [...new Set(foodTypes)],
      },
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Banner />
      <Switch>
        <Route exact path="/" component={Restaurants} />
        <Route exact path="/:foodType" component={Restaurants} />
        <Route exact path="/restaurant/:id" component={Menu} />
        <Route exact path="/restaurant/:id/reviews" component={Reviews} />
      </Switch>
    </div>
  );
}

export default App;
