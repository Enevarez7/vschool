var readLineSync = require('readline-sync');
var userName = readLineSync.question("What is your name? ");
console.log (userName);
console.log ('Hi ' + userName + '!');