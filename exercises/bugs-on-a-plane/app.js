let form = document.getElementById("airline-form");
let submit = document.getElementById("submit");
// let query = document.querySelector;

function submitInfo () {
    let firstName = form.elements["first-name"].value;
    let lastName = form.elements["last-name"].value;
    let age = form.elements["age"].value;
    let gender = form.elements["gender"].value;
    let location = form.elements["travel-location"].value;
    let diet = [];
        if (form['vegan'].checked) {
            diet.push(document.getElementById("vegan").value);
        }
        if (form['gluten'].checked) {
            diet.push(document.getElementById('gluten').value);
        }
        if (form['paleo'].checked) {
            diet.push(document.getElementById('paleo').value);
        }
    alert ("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet);
}
submit.addEventListener("click", submitInfo)
