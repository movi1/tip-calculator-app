


function changeColor() {
    console.log("Hello world!22222");

    document.getElementById("change").style.backgroundColor = "hsl(185, 41%, 84%)";
}
console.log("Hello world!");

function changeTipBorder() {
    var tip10 = document.getElementById("tip-10");
    tip10.style.borderColor = "red";
}

function changeLabelVisibility() {
    var inputBox = document.querySelector(".people-input");
    var errorLabel = document.querySelector(".people .error");
    if (inputBox.value > 0) {
        errorLabel.style.display = "none";
        var tip10 = document.getElementById("tip-10");
        tip10.style.borderColor = "initial";
    } else {
        errorLabel.style.display = "block";
    }
}


// function changeLetterColor() {
//     var errorLabel = document.querySelector(".people .error");
//     errorLabel.style.color = "red";
// }
// function changeLetterColor() {
//     var inputBox = document.querySelector(".people-input");
//     var errorLabel = document.querySelector(".people .error");
//     if (inputBox.value > 0) {
//       errorLabel.style.color = "initial";
//     } else {
//       errorLabel.style.color = "red";
//     }
// //   }
//   function changeLabelVisibility() {
//     var inputBox = document.querySelector(".people-input");
//     var errorLabel = document.querySelector(".people .error");
//     if (inputBox.value > 0) {
//       errorLabel.style.display = "none";
//     } else {
//       errorLabel.style.display = "block";
//     }
//   }




function changeBackgroundColor() {

    var tip10 = document.getElementById("tip-10");

    tip10.style.backgroundColor = " hsl(185, 41%, 84%)";

    tip10.style.color = "hsl(183, 100%, 15%)";
}


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.tips').forEach((element) => {
        element.addEventListener('click', function () {
            activateTip(this);
        });
    });
});

function activateTip(element) {
    document.querySelectorAll('.tips').forEach((el) => {
        el.classList.remove('active-tip')
    });
    element.classList.add('active-tip');
}

// Get the bill input field and the tip divs
var billInput = document.querySelector("#bill");
var tipDivs = document.querySelectorAll(".tips");

// Add event listener to the bill input field
billInput.addEventListener("input", calculateTip);

// Add event listener to each tip div
tipDivs.forEach(function (tipDiv) {
    tipDiv.addEventListener("click", calculateTip);
});

// Function to calculate the tip amount
function calculateTip() {
    // Get the bill amount
    var billAmount = billInput.value;

    // Get the selected tip percentage
    var selectedTip = document.querySelector(".active-tip").textContent;
    var tipPercentage = parseFloat(selectedTip.slice(0, -1)) / 100;

    // Calculate the tip amount
    var tipAmount = billAmount * tipPercentage;

    // Display the tip amount on the page
    document.querySelector("#tip-amount").textContent = "$" + tipAmount.toFixed(2);
    // Get the number of people
    const peopleInput = document.querySelector(".people-input");
    const people = peopleInput.value;

    // Calculate the total amount per person
    const totalAmount = (billAmount + tipAmount) / people;

    // Display the total amount per person
    const totalAmountElement = document.getElementById
}



function calculateTotalPerPerson() {
    var tipAmount = parseFloat(document.getElementById("tip-amount").innerHTML.substring(1));
    var people = document.getElementById("people-input").value;

    if (people === 0 || people === "") {
        return;
    }

    var totalPerPerson = tipAmount / people;
    document.getElementById("total-amount").innerHTML = "$" + totalPerPerson.toFixed(2);
}
document.getElementById("people-input").addEventListener("input", calculateTotalPerPerson);




function resetInputs() {
    document.getElementById("bill").value = "";
    document.getElementById("people-input").value = "";
    document.getElementById("tip-amount").innerHTML = "$0.00";
    document.getElementById("total-amount").innerHTML = "$0.00";
}

document.getElementById("change").addEventListener("click", resetInputs);
function changeColor() {
    document.getElementById("bill").style.borderColor = "black";
    resetInputs();
}

