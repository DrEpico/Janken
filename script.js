let playerScore = 0;
let computerScore = 0;
let playerSelection;

const resultsContainer = document.querySelector("#results-container");
const playerWins = document.createElement("p");
playerWins.classList.add("content");
const playerLoses = document.createElement("p");
playerLoses.classList.add("content");
const playerDraws = document.createElement("p");
playerDraws.classList.add("content");

const finalResultContainer = document.querySelector("#results-container");
const totalWin = document.createElement("p");
totalWin.classList.add("content");
const totalLose = document.createElement("p");
totalLose.classList.add("content");


const buttons = document.querySelectorAll("#container button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        playerSelection = this.innerHTML;
        playRound();
        getComputerChoice();
        getFinalResult();
    });
});

function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber === 0) {
            return computerChoice = "rock";
        } else if (randomNumber === 1) {
            return computerChoice = "paper";
        } else if (randomNumber === 2) {
            return computerChoice = "scissors";
        }
    }

//playerSelection = this.innerHTML; is setting the value of the playerSelection variable to the text content of the button that was clicked.

function playRound() {
    

    //playerWins.textContent = "Ayo dam, u win.\nPlayer" + " " + ++playerScore + " " + "vs" + " " + computerScore + " " + "Computer";
    //playerLoses.textContent = "What a nub, u lose.\nPlayer" + " " + playerScore + " " + "vs" + " " + ++computerScore + " " + "Computer";
    //playerDraws.textContent = "Boring. Draw game.\n" + " " + playerScore + " " + "vs" + " " + computerScore + " " + "Computer";

    console.log("player: " + playerSelection);
    console.log("computer: " + getComputerChoice());

    if (playerSelection === "rock" && computerChoice === "scissors") {
        playerWins.textContent = "Ayo dam, u win.\nPlayer" + " " + ++playerScore + " " + "vs" + " " + computerScore + " " + "Computer";
        resultsContainer.innerHTML = "";
        resultsContainer.appendChild(playerWins);
        console.log("player wins");
    } 

    else if (playerSelection === "rock" && computerChoice === "paper") {
        playerLoses.textContent = "What a nub, u lose.\nPlayer" + " " + playerScore + " " + "vs" + " " + ++computerScore + " " + "Computer";
        resultsContainer.innerHTML = "";
        resultsContainer.appendChild(playerLoses);
        console.log("player loses");
    } 

    else if (playerSelection === "paper" && computerChoice === "rock") {
        playerWins.textContent  = "Ayo dam, u win.\nPlayer" + " " + ++playerScore + " " + "vs" + " " + computerScore + " " + "Computer";
        resultsContainer.innerHTML = "";
        resultsContainer.appendChild(playerWins);
        console.log("player wins");
    }

    else if (playerSelection === "paper" && computerChoice === "scissors") {
        playerLoses.textContent = "What a nub, u lose.\nPlayer" + " " + playerScore + " " + "vs" + " " + ++computerScore + " " + "Computer";
        resultsContainer.innerHTML = "";
        resultsContainer.appendChild(playerLoses);
        console.log("player loses");
    }

    else if (playerSelection === "scissors" && computerChoice === "paper") {
        playerWins.textContent = "Ayo dam, u win.\nPlayer" + " " + ++playerScore + " " + "vs" + " " + computerScore + " " + "Computer";
        resultsContainer.innerHTML = "";
        resultsContainer.appendChild(playerWins);
        console.log("player wins");
    }

    else if (playerSelection === "scissors" && computerChoice === "rock") {
        playerLoses.textContent = "What a nub, u lose.\nPlayer" + " " + playerScore + " " + "vs" + " " + ++computerScore + " " + "Computer";
        resultsContainer.innerHTML = "";
        resultsContainer.appendChild(playerLoses);
        console.log("player loses");
    } 

    else{
        playerDraws.textContent = "Boring. Draw game.\n" + " " + playerScore + " " + "vs" + " " + computerScore + " " + "Computer";
        resultsContainer.innerHTML = "";
        resultsContainer.appendChild(playerDraws);
        console.log("player draws");
    }
}


//Janken() calls the playRound() inside of it 5 times to play a 5 round game that keeps score and reports a winner at the end.
//function Janken(){
    //for (let i = 0; i <= 4; i++){
        //playRound();
        //} 
        //getFinalResult();
//}


//getFinalResult() was moved to inside of the playRound() to ensure this function is only ran at the end of the all loops.
function getFinalResult(){
    if (computerScore === 5){
        computerScore = 0;
        playerScore = 0;
        totalLose.textContent ="You lose...";
        finalResultContainer.innerHTML = "";
        finalResultContainer.appendChild(totalLose);
    } else if (playerScore === 5){
        computerScore = 0;
        playerScore = 0;
        totalWin.textContent ="YOU WIN!!";
        finalResultContainer.innerHTML = "";
        finalResultContainer.appendChild(totalWin);
    } 
}


//for debugging ------------------------------
//console.log(Janken());
//console.log("player: " + (playerScore - 1));
//console.log("computer: " + (computerScore - 1));
