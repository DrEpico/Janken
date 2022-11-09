//OVERVIEW OF THE EXPECTED END PRODUCT
//a function that plays a single round of Rock Paper Scissors. 
    //the function takes two parameters of playerSelection and computerSelection.
        //playerSelection could be taken from a prompt (case insensitive).
    //then returns a string that declares the winner of the round. 

// scores 
let playerScore = 0;

let computerScore = 0;

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
        return "Ayo dam, u win.\nScore: " + playerScore++;
    } else if (computerChoice === "rock" && playerSelection === "scissors"){
        return "What a nub, u lose.\nScore: " + computerScore++;
    } else if (computerChoice === "rock" && playerSelection === "rock"){
        return "Boring. Draw game." //TODO:
    } else if (computerChoice === "paper" && playerSelection === "scissors"){
        return "Ayo dam, u win.\nScore: " + playerScore++;
    } else if (computerChoice === "paper" && playerSelection === "rock"){
        return "What a nub, u lose.\nScore: " + computerScore++;
    } else if (computerChoice === "paper" && playerSelection === "paper"){
        return "Boring. Draw game." //TODO:
    } else if (computerChoice === "scissors" && playerSelection === "rock"){
        return "Ayo dam, u win.\nScore: " + playerScore++;
    } else if (computerChoice === "scissors" && playerSelection === "paper"){
        return "What a nub, u lose.\nScore: " + computerScore++;
    } else if (computerChoice === "scissors" && playerSelection === "scissors"){
        return "Boring. Draw game." //TODO:
    } else return "What a nub, u lose.\nScore: " + computerScore++;    
}

//Janken function calls the playRound function inside of it 5 times to play a 5 round game that keeps score and reports a winner at the end.
    //why does the janken function stop after executing one loop out of 5 => because after i leave the fucntion the rest of the for loop is not executed. 
    //to execute the all 5, the for loop needs to be "somewhere else".
function Janken(){
    for (let i = 0; i <= 4; i++){
        alert(playRound());
        } 
}

function getFinalResult(){
    if (playerScore == computerScore){
        return "DRAW"
    } else if (computerScore >> playerScore){
        return "You Lose..."
    } else if (playerScore >> computerScore){
        return "YOU WIN!!!"
    }
}
alert(getFinalResult());

//for debugging ------------------------------
console.log(Janken());
console.log("player: " + playerScore);
console.log("computer: " + computerScore);
