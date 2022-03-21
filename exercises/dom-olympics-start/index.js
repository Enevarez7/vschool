let header = document
    .getElementById("header");
    header.innerText = "JavaScript Made This!!";
    header.style.textAlign = "center";
    header.style.fontSize = "30px"

    let span1 = document.createElement ("span");
    header.appendChild(span1);
    span1.classList.add("name");
    span1.innerText = "\r\n Eric Nevarez";
    span1.style.fontSize = "20px";
    span1.style.textAlign = "center"
    
    let span2 = document.createElement("span");
    header.appendChild(span2); 
    span2.innerText = " wrote the Javascript";
    span2.style.fontSize = "20px";
    span2.style.textAlign = "center";

    let messages = document.querySelector(".messages");

    messages.childNodes[1].textContent = "He's a bubble boy.";
    messages.childNodes[3].textContent = "A bubble boy?";
    messages.childNodes[5].textContent = "Yes. A bubble Boy";
    messages.childNodes[7].textContent = "What's a bubble boy?";
    messages.childNodes[9].textContent = "He lives in a bubble";
    messages.childNodes[11].textContent = "Boy!";

    let clear = document.getElementById("clear-button")
    clear.addEventListener("click", () => {

        messages.remove();
    });