"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//variables
let gameOdds = Object.entries(game.odds);

//functions
//1.
function printGoals(players) {
  for (const [key, value] of players) {
    console.log(`Goal ${key + 1}: ${value}`);
  }
}
printGoals(game.scored.entries());

//2.
let average = 0;
let odds = Object.values(game.odds);
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr =
    team === "x"
      ? "draw"
      : `
  victory ${game[team]}`; //if team is x, say 'draw', else say 'victory of [team-name]'
  console.log(`Odds of ${teamStr}: ${odd}`);
}

//main

//calc avg of team odds
// function calcAvgOdd(...odds) {
//   // let avgOdd = 0;
//   // for (const [key, value] of odds) {
//   //   avgOdd += Number(value);
//   //   console.log(`${key} : ${value}`);
//   // }
//   // avgOdd = avgOdd / odds.length;
//   // console.log(`The average odds are: ${avgOdd}`);
// }
