//OVERVIEW OF THE EXPECTED END PRODUCT
//a function that plays a single round of Rock Paper Scissors. 
    //the function takes two parameters of playerSelection and computerSelection.
        //playerSelection could be taken from a prompt (case insensitive).
    //then returns a string that declares the winner of the round. 

// scores 
let playerScore = 1;

let computerScore = 1;

// buttons is a node list. It looks and acts much like an array.
let playerSelection;
const btn1 = document.querySelector("#container #btn1");
btn1.addEventListener("click", function() {
    playerSelection = "rock";
    return Janken();
    
});

const btn2 = document.querySelector("#container #btn2");
btn2.addEventListener("click", function() {
    playerSelection = "paper";
    return Janken();
});

const btn3 = document.querySelector("#container #btn3");
btn3.addEventListener("click", function() {
    playerSelection = "scissors";
    return Janken();
});
//console.log(playerSelection); //for debugging

// a fucntion that randomely return either "rock", "paper" or "scissors"
    // a function that calls the random number function which returns a number netween 0 to 1. Multiplying the retunerned number by 3 will give numbers between 0, 1 or 2.
    // the function will return either "rock", "paper" or "scissors" based on the number that getComputerChoice() returns. (0=rock, 1=paper, 2=scissors) 
    
function playRound(){
    function getComputerChoice(){ 
        let randomNumber = Math.floor(Math.random() * 3);
        //console.log(randomNumber); //for debugging
        if (randomNumber == 0){
            return "rock"
        } else if (randomNumber == 1){
            return "paper"
        } else if (randomNumber == 2){
            return "scissors"
        }
    }

    //let playerSelection = prompt("Choose a hand by typing Rock, Paper or Scissors. First to 3 wins!").toLowerCase()
    console.log(playerSelection); //for debugging

    // Result of the getComputerChoice function is stored as a variable and not a constant (to avoid the "vs the same computerChoice for 5 rounds" issue).
    let computerChoice = getComputerChoice();
    console.log(computerChoice); //for debugging
    

    
    const resultsContainer = document.querySelector("#results-container");
    
    const playerWins = document.createElement("p");
    playerWins.classList.add("content");
    resultsContainer.appendChild(playerWins);
    playerWins.textContent = "Ayo dam, u win.\nPlayer" + " " + playerScore++ + " " + "vs" + " " + (computerScore - 1) + " " + "Computer";

    const playerLoses = document.createElement("p");
    playerLoses.classList.add("content");
    resultsContainer.appendChild(playerLoses);
    playerLoses.textContent = "What a nub, u lose.\nPlayer" + " " + (playerScore - 1) + " " + "vs" + " " + computerScore++ + " " + "Computer";

    const playerDraws = document.createElement("p");
    playerDraws.classList.add("content");
    resultsContainer.appendChild(playerDraws);
    playerDraws.textContent = "Boring. Draw game.\n" + " " + (playerScore - 1) + " " + "vs" + " " + (computerScore - 1) + " " + "Computer";

    const gameWin = () => {
        if (resultsContainer.firstChild) {
            resultsContainer.removeChild(resultsContainer.firstChild);
        } else {
        resultsContainer.appendChild(playerWins);
        }
    }
    const gameLose = () => {
        if (resultsContainer.firstChild) {
            resultsContainer.removeChild(resultsContainer.firstChild);
        } else {
        resultsContainer.appendChild(playerLoses);
        }
    }
    const gameDraw = () => {
        if (resultsContainer.firstChild) {
            resultsContainer.removeChild(resultsContainer.firstChild);
        } else {
        resultsContainer.appendChild(playerDraws);
        }
    }





    if (computerChoice == "rock" && playerSelection == "paper"){
        gameWin;
    } else if (computerChoice === "rock" && playerSelection === "scissors"){
        gameLose;
    } else if (computerChoice === "rock" && playerSelection === "rock"){
        gameDraw;//TODO: a new loop maybe at some point for the draw conditions but cba rn 💀
    } else if (computerChoice === "paper" && playerSelection === "scissors"){
        gameWin;
    } else if (computerChoice === "paper" && playerSelection === "rock"){
        gameLose;
    } else if (computerChoice === "paper" && playerSelection === "paper"){
        gameDraw;//TODO: a new loop maybe at some point for the draw conditions but cba rn 💀
    } else if (computerChoice === "scissors" && playerSelection === "rock"){
        gameWin;
    } else if (computerChoice === "scissors" && playerSelection === "paper"){
        gameLose;
    } else if (computerChoice === "scissors" && playerSelection === "scissors"){
        gameDraw; //TODO: a new loop maybe at some point for the draw conditions but cba rn 💀
    } else gameLose;  
}

//Janken() calls the playRound() inside of it 5 times to play a 5 round game that keeps score and reports a winner at the end.
function Janken(){
    //for (let i = 0; i <= 4; i++){
        console.log(playRound());
        //} 
        console.log(getFinalResult());
}

//getFinalResult() was moved to inside of the playRound() to ensure this function is only ran at the end of the all loops.
function getFinalResult(){
    if (playerScore == computerScore){
        return "DRAW"
    } else if (computerScore > playerScore){
        return "You Lose..."
    } else if (playerScore > computerScore){
        return "YOU WIN!!!";
    } else return "mamma mia";
}


//for debugging ------------------------------
//console.log(Janken());
//console.log("player: " + (playerScore - 1));
//console.log("computer: " + (computerScore - 1));
