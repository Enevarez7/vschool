const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log("Hello " + name + "!");
if (readline.keyInYN('would you like to play a game? yes/no')) {   
    console.log("Everything fades to black.....") 
    } else {
        process.exit();
    }
let key=0; 
while(true){
    startMenu()
}
function startMenu(){
    console.log("you wake up in a small white room. On one end is a door with a keyhole and on the other end is a hole large enough to put your hand in")
    let choice = readline.question("what will you do? \n 1) Put hand in hole \n 2) Find the key \n 3) Open the door");
    switch (choice) {
    case "1":
        defeatMenu()
    break;

    case "2":
        console.log("You have found a key!")
        key = 1;
        break;

    case "3":    
        if (key === 0) {
            console.log("Hmmm... the door seems to be locked, there might be a key somewhere");
        } else if (key === 1) {
                victoryMenu();
        }
        break;
        default:
            console.log ("please enter a choice: '1', '2' or '3' ")
            break;
    }
}
function victoryMenu() {
    let repeat= readline.question ("Congratulations " +name+ "!\n You've made it out of the Escape Room! \n play again? \n Yes \n No");
    switch (repeat) {
        case "1":
            startMenu()
            break;
        case "2":
            console.log ("gooodbye " +name+ "!")
            process.exit()
        default:
            console.log("please enter a choice: '1', or '2'" )
    }
}
function defeatMenu() {
    console.log( name, "puts hand in hole. Suddenly, a large unknown figure comes out of nowhere to beat " +name+ " senseless! " +name+ " blacked out....!");
    let repeat = readline.question("You're not out just yet! \n wake back up? \n 1) Yes\n 2) No");
    switch (repeat) {
        case "1":
            startMenu()
            break;
        case "2":
        console.log ("gooodbye " +name+ "!")
        process.exit()
            default:
                console.log("please enter a choice: '1', or '2'" )
                defeatMenu();
                break;
    }
}