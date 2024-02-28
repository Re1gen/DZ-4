const showButton = document.querySelector("#show");
const mainBlock = document.querySelector(".main_persons");
const buttonBlock = document.querySelector(".button_block")
showButton.onclick = () => {
    buttonBlock.style.display = "none";
    mainBlock.style.display = "block";
    const request = new XMLHttpRequest();
    request.open("GET", "persons.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.onload = () => {
        const data = JSON.parse(request.responseText);
        data.forEach((personData, index) => {
        const personDiv = document.querySelectorAll(".persons")[index];
        const personImg = personDiv.querySelector(".personImg");
        const personName = personDiv.querySelector(".person");
        const personAge = personDiv.querySelector(".age");
        
        personImg.src = personData.image;
        personImg.alt = personData.name;
        personName.textContent = personData.name;
        personAge.textContent = personData.age;
    });
    };
};
