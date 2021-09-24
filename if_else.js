// activity 1

let age = 23;
if (age < 17) {
    console.log("get a bit older, please")
} else {
    console.log("congratulations. you're in")
}

// output - congrats, ur in

// activity 1.2

let countryIn = "England";
let ageOf = 23;
if (ageOf > 17 && countryIn == "England"){
    console.log("come on in!")
} else {
    console.log("maybe another time...")
}

// output - come on in!

// activity 2


// output -

//activity 3

let password="12345678";
if (password.length <= 7) {
    console.log("too short!")
} else {
    console.log("that's long enough!")
}

// output - that's long enough! 

// activity 4

let num = 15;
if (num % 5 == 0 && num % 3 == 0){
    console.log("fizzbuzz")
} else if (num % 5 == 0){
    console.log("buzz");
} else if (num % 3 == 0){
    console.log("fizz")
} else {
    console.log("try again.")
}

//output - fizzbuzz

// activity 5

let num = 7337
let numstring = num.toString();
let reverseNumString = numString.split("").reverse().join("")

if (num == reverseNumString){
    console.log(`yes, ${num} is a palindrome!`)
} else {
    console.log(`No, ${num} is not a palindrome.`)
}

// output - yes, it's a palindrome!




// activity 6

let time = 10
let placeOfWork = "work"
let townOfHome = "manchester"

if (time >= 9 && time <= 17){
    console.log(`i am at ${placeOfWork}`)
} 

else if (time >= 17 && time <= 19){
    print("i am commuting")   
} 

else if (time >= 19 && time <= 24){
    print(`i am in ${townOfHome}`)
} else {
    console.log("i'm asleep")
}

// output - i am at work

// activity 7

