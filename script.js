//OVERVIEW OF THE EXPECTED END PRODUCT
//a function that plays a single round of Rock Paper Scissors. 
    //the function takes two parameters of playerSelection and computerSelection.
        //playerSelection could be taken from a prompt (case insensitive).
    //then returns a string that declares the winner of the round. 

// scores 
let playerScore = 1;

let computerScore = 1;

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        if (button.id == 1){
            return playerSelection = "rock", console.log("rock");
        } else if (button.id == 2){
            return playerSelection = "paper", console.log("paper");
        } else if (button.id == 3){
            return playerSelection = "scissors", console.log("scissors");
        }
    });
});


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

    let playerSelection = prompt("Choose a hand by typing Rock, Paper or Scissors. First to 3 wins!").toLowerCase()
    console.log(playerSelection); //for debugging

    // Result of the getComputerChoice function is stored as a variable and not a constant (to avoid the "vs the same computerChoice for 5 rounds" issue).
    let computerChoice = getComputerChoice();
    console.log(computerChoice); //for debugging
    
    if (computerChoice == "rock" && playerSelection == "paper"){
        return "Ayo dam, u win.\nPlayer" + " " + playerScore++ + " " + "vs" + " " + (computerScore - 1) + " " + "Computer";
    } else if (computerChoice === "rock" && playerSelection === "scissors"){
        return "What a nub, u lose.\nPlayer" + " " + (playerScore - 1) + " " + "vs" + " " + computerScore++ + " " + "Computer";
    } else if (computerChoice === "rock" && playerSelection === "rock"){
        return "Boring. Draw game.\n" + " " + (playerScore - 1) + " " + "vs" + " " + (computerScore - 1) + " " + "Computer";//TODO: a new loop maybe at some point for the draw conditions but cba rn 💀
    } else if (computerChoice === "paper" && playerSelection === "scissors"){
        return "Ayo dam, u win.\nPlayer" + " " + playerScore++ + " " + "vs" + " " + (computerScore - 1) + " " + "Computer";
    } else if (computerChoice === "paper" && playerSelection === "rock"){
        return "What a nub, u lose.\nPlayer" + " " + (playerScore - 1) + " " + "vs" + " " + computerScore++ + " " + "Computer";
    } else if (computerChoice === "paper" && playerSelection === "paper"){
        return "Boring. Draw game.\n" + " " + (playerScore - 1) + " " + "vs" + " " + (computerScore - 1) + " " + "Computer";//TODO: a new loop maybe at some point for the draw conditions but cba rn 💀
    } else if (computerChoice === "scissors" && playerSelection === "rock"){
        return "Ayo dam, u win.\nPlayer" + " " + playerScore++ + " " + "vs" + " " + (computerScore - 1) + " " + "Computer";
    } else if (computerChoice === "scissors" && playerSelection === "paper"){
        return "What a nub, u lose.\nPlayer" + " " + (playerScore - 1) + " " + "vs" + " " + computerScore++ + " " + "Computer";
    } else if (computerChoice === "scissors" && playerSelection === "scissors"){
        return "Boring. Draw game.\n" + " " + (playerScore - 1) + " " + "vs" + " " + (computerScore - 1) + " " + "Computer"; //TODO: a new loop maybe at some point for the draw conditions but cba rn 💀
    } else return "What a nub, u lose.\nPlayer" + " " + (playerScore - 1) + " " + "vs" + " " + computerScore++ + " " + "Computer";   
}

//Janken() calls the playRound() inside of it 5 times to play a 5 round game that keeps score and reports a winner at the end.
function Janken(){
    for (let i = 0; i <= 4; i++){
        alert(playRound());
        } 
        alert(getFinalResult());
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
