const readline = require("readline-sync");
var readLineSync = require('readline-sync');

var name = readLineSync.question("What is your name? ");

console.log("Hello " + name + "!");let operator = ["add", "sub", "mul", "div"]

var num1 = readLineSync.question("Please enter your first number: ");
console.log(num1);
var num2 = readLineSync.question("Please enter your second number: ");
console.log(num2);

let index = readline.keyInSelect(operator, "what operation would you like to perform")

choice()
function choice(){
    if(operator[index] === "add"){
        console.log("the sum is " + add(num1, num2));
    } else if(operator[index] === "sub"){
        console.log("the remainder is " + sub(num1, num2));
    } else if(operator[index] === "mul"){
        console.log("the product is " + multiplies(num1, num2));
    } else if(operator[index] === "div"){
        console.log("the quotient is " + divides(num1, num2));
    }
}
function add  (num1, num2) {
    return +num1 + +num2

}
function multiplies (num1, num2) {
    return num1 * num2
}
function divides (num1, num2) {
    return +num1 / +num2
}
function sub (num1, num2) {
    return num1 - num2
}