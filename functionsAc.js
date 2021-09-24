// activity 1 // turn this code into arrow function syntax


const factorial = (n) => {
    if ((n === 0) || (n === 1)){
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(33));

//activity 2 // edit to include two parameters and a running order count, updated when thefunction is called

let orderCount = 0;

const takeOrder = (toppingOne, toppingTwo) => {
    console.log(`pizza with ${toppingOne} and ${toppingTwo}`);
    orderCount++;
}
takeOrder("pineapple", "cheese");
takeOrder("mushroom", "cheese");
takeOrder("onion", "cheese");

//activity 3 // create cash machine that dipenses cash If your pin no. is correct, and your balance is equal to or more than, the mont you're trying to withdraw
let pin = 1234
let balance = 510
const takeCash = (pinIn, withdrawIn) => {
    if (pinIn === pin && withdrawIn <= balance) {
        console.log("that's correct!")
    } else {
        console.log("something went wrong.")
    }
}

takeCash(1235, 505);
takeCash(1234, 500);
takeCash(1234, 600);