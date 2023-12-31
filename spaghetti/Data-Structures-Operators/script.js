"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed lfor first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  time: ["22:10"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    time = "21:30",
    address,
    starterIndex,
    mainIndex = 2,
  }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delecious pasta with ${ing1}, ${ing2}, ${ing3} `);
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "mirpur dhaka, bangladesh",
  mainIndex: 2,
  starterIndex: 3,
});

/*******************************************/
/* TODO: Short Circuiting (&& and _) */
/*******************************************/

/*******************************************/
/* TODO: Rest Pattern And Parameters */
/*******************************************/

// //

// // Destructuring

// // SPREAD, because on LEFT side of = (assignment operator)
// const arrr = [1, 2, 3, 4, 5];
// const sprdArr = [1, 2, ...[84, 42]];

// console.log(sprdArr);

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFoods] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFoods);

// // objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2. functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// const x = [3423, 342, 3423, 342];
// add(...x);
// add(343, 34);

// restaurant.orderPizza("mushroom", "olive", "potato", "spinach");

// TODO: The Spread Operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArray = [1, 2, 3, ...arr];
// console.log(newArray);
// console.log(...newArray);

// const newMenu = [...restaurant.mainMenu, "panta ভাত"];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // join/merge 2 array
// const mergedMenu = [...mainMenuCopy, ...newMenu];
// console.log(mergedMenu);
// console.log(...mergedMenu);

// TODO: Itterables: arrays, strings, maps, sets. Not Objects.

// multiple values, separated by a comma only expected when passing arguments into a function or building a new array

// TODO: Real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// console.log(ingredients);

// const newRestaurant = { shobji: "lal shakh", ...restaurant, darkul: "alif" };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "mojar hotel";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// #444 Destructuring Objects

// ........................
// const { name, openingHours, starterMenu } = restaurant;
// console.log(name, openingHours, starterMenu);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   starterMenu: menuItem,
// } = restaurant;
// console.log(restaurantName, hours, menuItem);

// // Default Values
// // menuTest is not in the array/object
// const { menuTest = [], starterMenu: starters = [] } = restaurant;
// console.log(menuTest, starters);

// Mutating variables
// let a = 111;
// let b = 999;
// let c = 1;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b, c } = obj);
// console.log(a, b, c);

// // TODO: Nested Objects
// const {
//   fri: { open: abc, close: cba },
// } = openingHours;
// console.log(abc, cba);

// #fff Destructuring Array

// const [dalmon, doraemon] = restaurant.starterMenu;
// console.log(dalmon, doraemon);

// const arr = [2, 3, 4];
// const [as, y] = arr;
// console.log(as, y);

// let [first, second] = restaurant.categories;
// console.log(first, second);

// Switching Variables
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second); // Output = Pizzeria Italian
//not defined error TODO: error script.js:63 Uncaught ReferenceError: first is not defined TODO: Need fixing.

// Array Mutation TODO: Important
// [first, second] = [second, first];
// console.log(first, second); // Output = Italian Pizzeria

// // Calling method from ordering food function
// console.log(restaurant.order(3, 1));

// const [menu1, menu2] = restaurant.order(3, 1);
// console.log(menu1, menu2);

// // nested destructuring

// const nested = [2, 3, [4, 5]];

// // simplly getting the values from nested arrays
// const [i, , j] = nested;
// console.log(i, j);

// // get individual value from the nested array
// const [xa, , [xb, xc]] = nested;
// console.log(xa, [xb]);
