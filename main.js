const team = {
_players: [{firstName:'Jeff', lastName:'Driskel', age: 28},
{firstName:'Dani', lastName:'Alves', age: 38},
{firstName:'CristiSergi', lastName:'Roberto', age: 28},],

_games: [{opponent:'Broncos', teamPoints:42, opponentPoints:27},
{opponent:'USTA', teamPoints:42, opponentPoints:27},
{opponent:'Bristol', teamPoints:10, opponentPoints:9}],

get players() {
    return this._players;
},

get games() {
    return this._games;
},

addPlayer(firstName, lastName, age) {
this.players.push({
    firstName,
    lastName,
    age
});
},

addGame(opponent, teamPoints, opponentPoints) {
    this.games.push({
        opponent,
        teamPoints,
        opponentPoints
    });
}
};
//add a Players
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

//add a Games
team.addGame('Liverpool', 4, 3);
team.addGame('FC Barcelona', 3, 0);
team.addGame('Real Madrid', 6, 1);


let indexG = 0;
while (indexG < team.games.length){
const opp = team.games[indexG].opponent;
const tP = team.games[indexG].teamPoints;
const oP = team.games[indexG].opponentPoints;
console.log(`Opponent:${opp} | Team Points:${tP} | Opponent Points: ${oP}`);
indexG++;
}
