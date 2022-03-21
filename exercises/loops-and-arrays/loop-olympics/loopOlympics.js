var numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

for (var i = 0; i < numbersArr.length; i++){
    console.log(numbersArr[i])
}

    for (var i = numbersArr.length - 1; i >= 0; i--){
        console.log(numbersArr[i])
    }

const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for (var i = 0; i < fruit.length; i++){
     console.log(fruit[i])
    }

 const x = fruit.filter((element, index) => {
     return index % 2 === 0;
 })
 console.log(x)

var counter = 0;
var line=[];


for(var i = 0; i<=100; i++){
  if(i%2==0){
        console.log(line);
        line=[];
        counter=0;
        line[counter] =i;
    }
}

arrOfNumbers = ["10"]

// can leave array blank

arrOfNumbers.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")

arrOfNumbers.shift()

// removes the 10 from the array

console.log(arrOfNumbers)