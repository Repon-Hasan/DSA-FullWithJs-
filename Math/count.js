// let input=45678;
// let count=0
// let values=0
// let last=0

// while(input > 0){
//     lastDigit=Math.floor(input % 10)
//     input=Math.floor(input / 10)
//     console.log(input)
//     values=input
//     last=lastDigit
//     count++
// }

// console.log("Count",count,"Values:",values,"LastDigit",last)

let input = 45678;
let firstDigit = 0;
let lastDigit = input % 10;

while (input > 0) {
    firstDigit = input % 10;
    input = Math.floor(input / 10);
}

console.log("First Digit:", firstDigit);
console.log("Last Digit:", lastDigit);