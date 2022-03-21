var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = ["abcdefghijklmnopqrstuvwxyz"]
var addAll = forception(people, alphabet)
function forception(people, alphabet) {
    let addAll =[]
    for (let i =0; i < people.length ; i++) {
        addAll.push(people[i])
        
    for (let j =0 ; j < alphabet.length ; j++) {
       addAll.push(alphabet[j].toUpperCase());
        
    }
}
return addAll
}
addAll.forEach(element => {
    console.log(element)
});