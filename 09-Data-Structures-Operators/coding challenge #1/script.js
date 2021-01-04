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
//1. Create players1 and players2 array (destructuring assignment)
const [players1, players2] = game.players;

//2. get goal keeper and rest of field players
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

//3. Create an array allPlayers with all 22 players (use spread to get all individual elements)
const allPlayers = [...players1, ...players2];

//4. add 3 substitute players to team1
const players1Final = ["Thiago", "Coutinho", "Perisic", ...players1];

//5. get odds for teams and for draws
const { team1, x: draw, team2 } = game.odds;

//6. write function printGoals
function printGoals(...players) {
  for (player of players) {
    console.log(player);
  }
}

const scored = game.scored;
let goals = scored.length;

printGoals(scored);
console.log(`Total goals scored : ${goals}`);

//7. team with lower odds is most likely to win : no if-else of ternary operator
