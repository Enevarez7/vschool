var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

    vegetables.pop()
    console.log (vegetables)
    fruit.shift()
    console.log(fruit)
    var orangeIndex = fruit.indexOf("orange")
    console.log(orangeIndex)
    fruit.push(orangeIndex)
    console.log(fruit)
vegetables.push(vegetables.length)
console.log(vegetables)
let foods = fruit.concat(vegetables)
console.log(foods)
let foodSplice = foods.splice(4,2)
console.log(foodSplice)
console.log(foods)
foods.reverse()
let foodsToString = foods.toString()
console.log(foodsToString)
