/*
const myString = "Hello \"World\'s\"  4\\6";
const myNumber = 100;
const myBoolean = true;
const myNone = null;


const question1 = 'what is';
const question2 = "your name"
const question = `${question1} ${question2}?`;
let name = prompt(question);
document.write(`Hello, ${name}. Welcome to the page.`);
const a = 5;
const b = 11;
const myString = `${b % a}`;
let myTotal = a - b;

const question1 = "provide a number";
const number1 = Number(prompt(question1));
const question2 = "provide a number to add to the first";
const number2 = Number(prompt(question2));
document.write(`${number1} + ${number2} is equal to ${number1 + number2}`);

let a = 5;
let b = 4;
b = b + a;
b += a;

let a = Number(prompt("first"));
let b = Number(prompt("second"));
let message = (a > b) ? "First is larger" : "First is smaller";
document.write(message);
*/

let a = 5;
let b = 10;
let c = "5";
b++; // b is 11
let d = ((b%5)>0) ? "odd" : "even"; // b%5 equals 1 and is larger than 0, returns "odd" because statement is true

console.log(typeof a == "number"); //TRUE
console.log(typeof c == typeof "number"); // c is string and "number" is string TRUE
console.log((d=="odd" && b>10 && b>=(a*2))); // d returns odd, 11 > 10, b > 10 TRUE

