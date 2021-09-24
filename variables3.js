// activity 3
let today = new Date(21, 09, 2021);
let birthday = new Date(22, 09, 1997);



let newDate = birthday.getFullYear() - today.getFullYear();
let result = Math.floor(newDate / (1000 * 60 * 60 * 24));

console.log(result);

//activity 4

let x="x";
let o="o";
console.log("   |   |   ")
console.log(` ${x} | ${o} |   `)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(` ${x} | ${x} |   `)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(` ${o} |   |   `)
console.log("   |   |   ")
