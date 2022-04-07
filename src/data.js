const restaurants = [
  {
    id: "unI8k",
    name: "Dishroom",
    foodTypes: ["sushi", "pizza", "vegan"],
    img: "https://course-react.javascript.ru/assets/thumb/sushi_5.jpg",
    voteSum: 8,
    voteAmount: 2,
    dishesIds: ["asd", "asd2", "asd3"],
    reviews: [
      {
        name: 'Antony',
        text: 'Not bad',
        rating: 5,
      },
      {
        name: 'Sam',
        text: 'No burgers',
        rating: 3,
      }
    ]
  },
  {
    id: "qnI9k",
    name: "Homeslice",
    foodTypes: ["sushi"],
    img: "https://course-react.javascript.ru/assets/thumb/ribs_5.jpg",
    voteSum: 12,
    voteAmount: 3,
    dishesIds: ["qwe", "qwe2"],
    reviews: [
      {
        name: 'Diana',
        text: 'Perfect Margarita',
        rating: 5,
      },
      {
        name: 'Sam',
        text: 'No burgers again. But Chef Pizza is the best one',
        rating: 4,
      },
      {
        name: 'Lolly',
        text: 'Good for lunch',
        rating: 5,
      }
    ]
  },
  {
    id: "qnI7k",
    name: "Fabrique",
    foodTypes: ["asian", "sushi", "seafood"],
    img: "https://course-react.javascript.ru/assets/thumb/sushi_2.jpg",
    voteSum: 5,
    voteAmount: 1,
    dishesIds: ["zxc", "zxc2", "zxc3"],
    reviews: [
      {
        name: 'Agata',
        text: 'Best bakery',
        rating: 5,
      },
    ]
  },
  {
    id: "qnI6k",
    name: "Flat Iron",
    foodTypes: ["pasta", "pizza"],
    img: "https://course-react.javascript.ru/assets/thumb/pizza_4.jpg",
    voteSum: 10,
    voteAmount: 2,
    dishesIds: ["rty", "rty2"],
        reviews: [
      {
        name: 'Sam',
        text: 'Finally! This place is amazing place for breakfast, lunch, dinner and supper',
        rating: 5
      },
      {
        name: 'Rebeca',
        text: 'Meat here is extremely delicious',
        rating: 5,
      }
    ]
  },
];

export default restaurants;
