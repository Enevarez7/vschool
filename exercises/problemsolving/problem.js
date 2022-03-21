function largestNumber (...num) {
 let value = 0
for (let i = 0; i < num.length; i++)
    if (num [i]> value){
        value = num[i]
    }
    return value
}
console.log(largestNumber(3, 5, 2, 8, 1))

function lettersWithStrings(arrayInput) {
    let str = ""
    for (let i = 0; i < arrayInput.length; i++) {
        if ((arrayInput[i] >= 'A' && arrayInput[i] <= 'Z')) {
          str += arrayInput[i];
        }
      }
    
      return str
}
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"]))

function isDivisible (num1, num2){
if (num1 % num2 == 0){
    return true
    }
    else {
    return false
    }
}
console.log(isDivisible(4,2))