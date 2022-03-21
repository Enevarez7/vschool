var readline= require("readline-sync");
const playerName = readline.question("Welcome to Eric's Sewer Tunnel RPG!\nWhat is your name?: ");


const startingHP = 100;
let gameOver = false;

const enemies = [];
foundItems = [];
const weapon1 = [];

function playerList(playerName){
    this.name = playerName;
    this.hp = startingHP;
    this.inventory = [];
    this.coins = [];
}

function weaponList(type, min, max){
    this.type = type;
    this.atkMin = min;
    this.atkMax = max;
}

function itemList(type, value) {
    this.type = type;
    this.value = value;
}
foundItems.push(new itemList("copper coin", 1));
foundItems.push(new itemList("silver coin", 10));
foundItems.push(new itemList("gold coin", 50));

function enemyList (type, hp, min, max, regen){
    this.type = type;
    this.hp = hp;
    this.atkMin = min;
    this.atkMax = max;
    this.healthRegen = regen
}
enemies.push (new enemyList("Rat", 30, 2, 5, 10));
enemies.push (new enemyList("Snake", 50, 20, 50, 20));
enemies.push (new enemyList("turtle", 80, 2, 60, 30));
enemies.push (new enemyList("Alligator", 150, 2, 5, 40));

function walk(){
    console.log("\n...walking...")
    
    while(!enemyAtkCalc()) {
        console.log("\n...nothing yet...")
    }

let enemy = encounterRandomEnemy();


let encounterStart = readline.keyIn(`${enemy.type} encountered! press "f" to fight or "r" to run `, {limit: ['f', 'r']});
    
    if (encounterStart === "f") {

        let weapons = pickWeapon();
        console.log(weapons)
        let selfMin = weapons.atkMin;
        let selfMax = weapons.atkMax;
        while(self.hp > 0 && enemy.hp > 0) { playerAtk(self, enemy, selfMin, selfMax) };  

    }
    if (encounterStart === "r") {
        //logic for 50% success if good, flee, if bad enemy atk return to encounter
        flee(enemy);
        enemy = {} 
        return
    }
    if (self.hp === 0) {
        console.log(`${player.name} tried to run, but ${enemyList.type} is faster! ${player.name} couldn't escape!`);
        gameOver();
    }
}
// attack and flee calculations
//enemy attack 1 in 4 chances
function enemyAtkCalc() {
    if (Math.floor((Math.random() * 4) +1) === 4) { return true;}
    return false;
}

function encounterRandomEnemy(){
    return enemies[Math.floor(Math.random()* enemies.length)];
}

function pickWeapon() {
    console.log(`\nhere are your weapons: `);
    self.inventory.forEach (item => console.log(item.type));
    let index = readline.keyInSelect(weapon1, "what item would you like to choose?")
    
    while (index === -1){
        console.log("you must pick a weapon to continue")
        index = readline.keyInSelect(weapon1, "what item would you like to choose?")
    }
    let choice = self.inventory[index]
    return choice
}

function playerAtkCalc(min,max) {
    var playerattack = Math.floor(Math.random() * (max - min + 1) + min);
    return playerattack
}

function playerAtk (self, enemy, min, max){
    enemy.hp -= playerAtkCalc (min, max);
    console.log(`\n${self.name} attacked ${enemy.type}! ${enemy.type} has ${enemy.hp} hp`)
        
    if(enemy.hp > 0){
        enemyAtk(self, enemy, min, max);
    } else {
        winnerText(self, enemy);
    }
}
function flee(enemy) {
    if(Math.random()>= 1/2) {
        console.log(`\n ${self.name} managed to escape!`);
    } else {
        enemyAtk(self, enemy);
    }
}
function enemyAtk (self, enemy, selfMin, selfMax) {
    var enemyAttack = self.hp -= playerAtkCalc (enemy.atkMin, enemy.atkMax);
    console.log(`\n${enemy.type} attacked ${self.name}! \n ${self.hp} left`);
        if (self.hp > 0) {
            playerAtk(self, enemy, selfMin, selfMax);
            return enemyAttack
        } else {
            winnerText (self, enemy);
        }
}
// health gained from enemy slain
function healSelf (self, enemy) {
    if (self.hp < startingHP) {
        if (startingHP - self.hp > enemy.healthRegen) {
            self.hp += enemy.healthRegen;
        } else {
            self.hp += startingHP - self.hp
        }
    }
    console.log(`\n + ${enemy.healthRegen}hp from defeating the ${enemy.type}`)
}

function addItemToInventory (self) {
    let newItem = foundItems[Math.floor(Math.random()* foundItems.length)]
    self.inventory.push(newItem);
    console.log(`\n${newItem.type} acquired!`)
}

function winnerText(self, enemy) {
    if (self.hp > 0) {
        console.log("\n enemy slain! good job!");
        addItemToInventory(self,enemy);
        healSelf(self,enemy);
    } else {
        console.log( `\n ${self.name} has been defeated! try again!`);
        endGame();
    }
}

function showInventory(){
    return self.inventory.forEach (item => console.log(item.type));
}

function printStatus(){
    console.log(`name: ${self.name}, hp: ${self.hp}`)
    console.log(`inventory:`);
    showInventory();
}

function endGame(){
    console.log("\n Game Over...");
    gameOver = true;
    process.exit();
}

const self = new playerList(playerName);

const weaponChoice = readline.keyIn("\nBefore you head out, choose a weapon. Select: '1' for bat, '2' for slingshot, or '3' for whip: ",{limit: ['1', '2', '3']});

if(weaponChoice === "1") {
    weapons = new weaponList("bat", 10, 30);
}
if(weaponChoice === "2") {
    weapons = new weaponList("slingshot", 20, 100);
}
if(weaponChoice === "3") {
    weapons = new weaponList("whip", 20, 50);
}
self.inventory.push(weapons)
weapon1.push(weapons.type)

while(!gameOver) {
    let action = readline.keyIn("\nTo continue forward, press: 'w' to walk, \n'p' to print player information,\n or 'q' to quit. ", {limit: ['w', 'p', 'q']});

    if(action === 'w') {
        walk();
    } 
    if(action === 'i') {
        healthItems();
    }
    if(action === 'p') {
        printStatus();
    }
    if(action === 'q') {
        endGame();
    } 
}