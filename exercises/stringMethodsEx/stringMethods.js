var line1 = "hello"
var line2 = "Hello World"

var upperCase = line1.toUpperCase()
var lowerCase = line1.toLowerCase()

console.log(upperCase)
console.log(lowerCase)

var both = upperCase.concat(lowerCase)

console.log(both)

function middleIndexOf (str) {
    return Math.floor(str.length / 2)
}

console.log(middleIndexOf("hello"))

function returnFirstHalf (str) {
    if (str.length % 2 === 0) {
      return str.slice(0, str.length / 2);
    }
    return str.slice(0, str.length / 2);
  }

  console.log(returnFirstHalf("Hello"))
  console.log(returnFirstHalf("Hello World"))
function capilizeAndLowercase (str) {
    var firstHalf = returnFirstHalf(str)
    var midIndex =  middleIndexOf (str)
    var secondHalf = str.slice(midIndex)
    console.log(secondHalf)
 return console.log(firstHalf.toUpperCase() + secondHalf.toLowerCase())
}
capilizeAndLowercase("heLLO WoRlD")
