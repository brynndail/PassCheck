let userName = prompt("Please enter your name:" );

let passingNames = ["Brynn", "Harrison", "Ewan", "Liam", "Riordan"];

let result = passingNames.includes(userName)

const messageElement = document.getElementById('message');

const nameText = document.createTextNode(userName);
const lineBreak = document.createElement("br");
const resultMessage = document.createTextNode("It is " + result + " that you passed.")
let closerMessage = "";

if (result === true) {
    closerMessage = "Congratulations!";
} else {
    closerMessage = "We are very sorry. Please retake at your earliest convienence.";
}

const closerMessageNode = document.createTextNode(closerMessage);

messageElement.appendChild(nameText);
messageElement.appendChild(lineBreak);
messageElement.appendChild(resultMessage);
messageElement.appendChild(closerMessageNode);



