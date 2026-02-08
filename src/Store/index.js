import imgOne from "../assets/imgOne.png";
import imgTwo from "../assets/imgTwo.png";
import imgThree from "../assets/imgThree.png";
import imgFour from "../assets/imgFour.png";

import IconOne from "../assets/food_icon.svg?react";
import IconTwo from "../assets/drink_icon.svg?react";
import IconThree from "../assets/dessert_icon.svg?react";
import IconFour from "../assets/side_icon.svg?react";

export const products = [
  {
    id: 1,
    name: "Classic Wagyu Burger",
    ingredients: "Organic beef, cheddar, truffle mayo",
    price: 18.5,
    img: imgOne,
    kind: "mainCourse",
  },
  {
    id: 2,
    name: "Truffle Margherita",
    ingredients: "Buffalo mozzarella, fresh basil",
    price: 22.0,
    img: imgTwo,
    kind: "mainCourse",
  },
  {
    id: 3,
    name: "Avocado Power Bowl",
    ingredients: "Quinoa, baby spinach, citrus dressing",
    price: 14.2,
    img: imgThree,
    kind: "mainCourse",
  },
  {
    id: 4,
    name: "crispy calamari",
    ingredients: "Zesty lemon, homemade tartare",
    price: 12.5,
    img: imgFour,
    kind: "mainCourse",
  },

  {
    id: 5,
    name: "Classic Wagyu Burger",
    ingredients: "Organic beef, cheddar, truffle mayo",
    price: 18.5,
    img: imgOne,
    kind: "food",
  },
  {
    id: 6,
    name: "Truffle Margherita",
    ingredients: "Buffalo mozzarella, fresh basil",
    price: 22.0,
    img: imgTwo,
    kind: "drinks",
  },
  {
    id: 7,
    name: "Avocado Power Bowl",
    ingredients: "Quinoa, baby spinach, citrus dressing",
    price: 14.2,
    img: imgThree,
    kind: "dessert",
  },
  {
    id: 8,
    name: "crispy calamari",
    ingredients: "Zesty lemon, homemade tartare",
    price: 12.5,
    img: imgFour,
    kind: "sides",
  },
];

export const categories = [
  { name: "main", path: "/", icon: "logo" },
  { name: "Food", path: "/food", icon: IconOne },
  { name: "Drinks", path: "/drinks", icon: IconTwo },
  { name: "Dessert", path: "/dessert", icon: IconThree },
  { name: "Sides", path: "/sides", icon: IconFour },
];
