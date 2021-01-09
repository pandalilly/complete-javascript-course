'use strict';
//Destructuring is breaking down the array into smaller bits
const openingHours = {
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
};

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   //ES6 enhanced object literals
//   openingHours, //incl. variable object
//   order(starterIndex, mainIndex) {
//     //writing functions
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   //old way of writing object methods
//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },
// };
// //no way of using elements
// //used to unique list of unordered items
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
//   'Pasta',
// ]);

// console.log(ordersSet); //Set(3){"Pasta","Pizza","Risotto"}
// console.log(new Set('Sophia')); //Set { 'S', 'o', 'p', 'h', 'i', 'a' }
// //get size
// console.log(ordersSet.size); //get number of unique values in set
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// //loop through a set
// for (const order of ordersSet) console.log(order);

// //Example
// const staff = ['waiter', 'chef', 'waiter', 'manager'];
// const staffUnique = [...new Set(staff)]; //get unique staff array (using Set) and spread to get into array format (spread operator)
// console.log(staffUnique);

// //Maps
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze,Italy');
// rest.set(2, 'Lisbon, Portugal');
// //chaining using Map.set() method
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));

const question = new Map([
  ['question', 'What is best programming language?'],
  [1, 'Haskell'],
  [2, 'JavaScript'],
  [3, 'All of them!'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Sorry, try again :('],
]);
console.log(question);

//Convert object to map!
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

const answer = Number(prompt('Your answer?'));
console.log(answer);

//Iteration over maps
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
console.log(question.get(question.get('correct') === answer));

// restaurant.orderDelivery({
//   time: '22:30',
//   address: '33 Garden street',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1? "),
//   prompt('Ingredient 2: '),
//   prompt('Ingredient 3: '),
// ];

// restaurant.orderPasta(...ingredients);

// //The spread operator (works on all iterables e.g. all arrays, strings, sets, maps and NOT OBJECTS)
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnochie'];
// console.log(newMenu);

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join two or more arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log('New menu: ' + menu);

// //spread operator on strings
// const str = 'Sophia';
// const letters = [...str, ' ', 'J.'];
// console.log(letters);
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
