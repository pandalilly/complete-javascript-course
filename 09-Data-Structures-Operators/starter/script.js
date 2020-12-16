'use strict';
//Destrructuring is breaking down the array into smaller bits

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: '33 Garden street',
  mainIndex: 2,
  starterIndex: 2,
});

const ingredients = [
  prompt("Let's make pasta! Ingredient 1? "),
  prompt('Ingredient 2: '),
  prompt('Ingredient 3: '),
];

restaurant.orderPasta(...ingredients);

//The spread operator (works on all iterables e.g. all arrays, strings, sets, maps and NOT OBJECTS)
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnochie'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join two or more arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log('New menu: ' + menu);

//spread operator on strings
const str = 'Sophia';
const letters = [...str, ' ', 'J.'];
console.log(letters);

/*
const { name, openingHours, categories } = restaurant; //destructuring objects variable names must match property names  of the object :)
const { name: restaurantName, openingHours: tradingHours } = restaurant;
console.log(restaurantName, tradingHours);

//Default values to a destructured object
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 99;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
