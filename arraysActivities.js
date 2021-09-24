// activity 1
// create array that lists fav films. 5
// add 2 more
// use loop to cycle through array
let favFilms = ["film1", "film2", "film3", "film4", "film5"];
console.log(favFilms);
//
favFilms.push("film6", "film7");
console.log(favFilms);
//
for(let i = 0; i < favFilms.length; i++){
    console.log(favFilms[i]);
}

// activity 2
// generate 6 ran nums between 1-50

// let num = Math.floor(Math.random() * 50);
// console.log(num)                                    // generates 6 of the same random number

for (let i = 0; i < 6; i++){
    console.log(Math.floor(Math.random() * 50));
}



// activity 3
// if we can create a loop to put 0-9 on screen, how can we count from 9-0

for (let i = 9; i >= 0 ; i--){
    console.log(i)
}



//activity 4
// display 4 films in an array
// usr for loop to show each film in array
//use if statement to check if 3rd film is ghpstbusters
// if it is, yay its grhostbusters, if isnt then boo we want ghostbusters

let movies = ["Chicken run", "Chicken Little", "Valiant", "Ghostbusters"]

for(let i = 0; i < movies.length; i++){
    console.log(movies[i])
}

if (movies[2] == "Ghostbusters"){
    console.log("yay, it's ghostbusters")
} else {
    console.log("boo. we want ghostbusters")
}




//activity 5
// create var, generate a ran no. vetween 1 and 30 6 times. check if each generation visible by 7 or not and log to console if it is or if it isnt

for (let i = 0; i < 6; i++){
    let ranNum = (Math.floor(Math.random() * 30));
    if (ranNum % 7 == 0){
        console.log(`${ranNum} is divisible by 7!`)
    } else {
        console.log(`sorry, ${ranNum} is not disible by 7`)
    }
}

//activity 6
// create 2 arrays of followers 2 people.
// make sure there are 2 names in both lists. use a nested loop iterate over both arrays and console.log out the matching followers

let john = ["jane", "joe", "jim", "jed", "jerald"];
let jerald = ["jane", "joe", "josh", "jay", "john"];

for(let i = 0; i < john.length && jerald.length; i++){
    if (john[i] === jerald[i]){
        console.log("mutual friends!")
    }
    else {
        console.log("time to make friends?...")
    }
}

//activity 7
// research on do...while loops. find out difference between for loop, while loop and do...while loop and give n example of each. what are the pros of cons?

