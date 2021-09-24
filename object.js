const character = {
    name: "Lou",
    age: 24,
    hasSpecialPowers: true,
    powers: [
        "invisibility",
        "caffeine tolerance"
    ],
    songs: [
        "evacuate the dancefloor",
        "everytime we touch"
    ],
    sayHi(){
        return `Their name is ${this.name} `
    
    },
    
}
descr()
descr() 
console.log(`their magical powers include ${character.powers[0]} and ${character.powers[1]}. `)
console.log(`\n Their current favourite songs are ${character.songs[0]} and ${character.songs[1]}! `);

sayHi()


////////


let offer = "none";
let time = 1700;
const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
      "Cappucino",
      "Latte",
      "Filter Coffee",
      "Tea",
      "Hot Chocolate"
    ],
    breakfastOffer: "a free croissant with your coffee",
    lunchOffer: "a free drink with surprisingly priced sandwich",
    noOffer: "sorry, no offer",

    openCafe(){
        if(this.hasSpecialOffers){
            return "come on in";
            }
    },
    closeCafe(){
        return "we're closed!"
    }
    
  };

console.log(cafe.openCafe());

if (time > 1400){
    offer = cafe.breakfastOffer;
    console.log(`enjoy our breakfast offer of ${cafe.breakfastOffer}!`)
} else if (time < 1500){
    offer = cafe.lunchOffer;
    console.log(cafe.lunchOffer)
} else {
    console.log(cafe.noOffer)
};



////////

let day = "saturday";

const alarm = {
weekendAlarm: "no alarm needed",
weekdayAlarm: "get up at 7am"
};

if (day == "saturday" || day == "sunday"){
    console.log(alarm.weekendAlarm)
} else {
    console.log(alarm.weekdayAlarm)
}