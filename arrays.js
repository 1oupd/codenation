let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new"
];
console.log(coffeeOrder)

//array - square brackets

coffeeOrder[1] = "Ann - Vanilla Latte"; // reassign index 1
console.log(coffeeOrder); // index

// .length of an array outputs the no. of items
// push  method:
coffeeOrder.push("Donna - Espresso");
console.log(coffeeOrder) // adds onto end

coffeeOrder.pop(); // gets rid of last item
console.log(coffeeOrder);



//activity 1

let favSongs = [
    "Song 1 - great artist",
    "ouch - timberlake",
    "Charlie - Whatever's new"
];
console.log(favSongs)

// stretch

favSongs.push("Donna - the Espresso song", "alex - the alex song");
console.log(favSongs)

favSongs.pop()

console.log(favSongs)

// activity 2

let favFood = [
    "spag bol",
    "sandwich",
    "fruit",
    "veg"
];
console.log(favFood)
favFood.shift()
console.log(favFood)

// loops

let favLiq = [
    "coke",
    "fanta",
    "tonic",
    "red bull"
];

for(let i = 0; i < favLiq.length; i++){
    console.log(favLiq[i]);
}

// loops through the cards at random
// when it hits spade it stops

let cards = ["diamond", "spade", "heart", "club"];
let currentCard = "club";
while(currentCard != "spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);
