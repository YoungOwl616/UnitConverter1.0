const userInput = document.querySelector("#user-input");
const convertBtn = document.querySelector("#convert-btn");
const clearBtn = document.querySelector("#clear-btn");
const lengthPara = document.querySelector("#length-para");
const volumePara = document.querySelector("#volume-para");
const massPara = document.querySelector("#mass-para");


convertBtn.addEventListener("click", function() {
    if (userInput && userInput.value) {
        if (isNaN(userInput.value)) {
            alert("Please enter a numeric value...");
            userInput.value = "";
        } else {
            lengthPara.textContent = `${userInput.value} meters = ${parseFloat((userInput.value * 3.281).toFixed(2))} feet | ${userInput.value} feet = ${parseFloat((userInput.value / 3.281).toFixed(2))} meters`;
            volumePara.textContent = `${userInput.value} liters = ${parseFloat((userInput.value * 0.264).toFixed(2))} gallons | ${userInput.value} gallons = ${parseFloat((userInput.value / 0.264).toFixed(2))} liters`;
            massPara.textContent = `${userInput.value} kilos = ${parseFloat((userInput.value * 2.204).toFixed(2))} pounds | ${userInput.value} pounds = ${parseFloat((userInput.value / 2.204).toFixed(2))} kilos`;
        }
    } else {
        alert("Please type something...");
    }
})

clearBtn.addEventListener("click", function() {
    lengthPara.textContent = "";
    volumePara.textContent = "";
    massPara.textContent = "";
    userInput.value = "";
})