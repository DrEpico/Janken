// a fucntion that randomely return either "rock", "paper" or "scissors"
    // a function that calls the random number function which returns a number netween 0 to 1. Multiplying the retunerned number by 3 will give numbers between 0, 1 or 2.
    // the function will return either "rock", "paper" or "scissors" based on the number that getComputerChoice() returns. (0=rock, 1=paper, 2=scissors) 

//function getComputerChoice(){ 
    //let randomNumber = Math.floor(Math.random() * 3);
    ///console.log(randomNumber);
    //if (randomNumber == 0){
    //    return "rock"
    //} else if (randomNumber == 1){
    //    return "paper"
    //} else if (randomNumber == 2){
    //    return "scissors"
    //}   
//}

//------------------------------------------------------------------------------ABANDONED-----------------------------------------------------------------------------

//Result of the getComputerChoice function is now stored as a constant which means that the playRound funtion now has only one hand from the getComputerChoice function 
//to compare with the user input.
//let computerChoice = getComputerChoice();
//console.log(computerChoice);

//OVERVIEW OF THE END PRODUCT
//a function that plays a single round of Rock Paper Scissors. 
    //the function takes two parameters of playerSelection and computerSelection.--
        //playerSelection could be taken from a prompt (case insensitive).
    //then returns a string that declares the winner of the round. 

let playerScore = 0;

let computerScore = 0;

function playRound(){
    function getComputerChoice(){ 
        let randomNumber = Math.floor(Math.random() * 3);
        //console.log(randomNumber);
        if (randomNumber == 0){
            return "rock"
        } else if (randomNumber == 1){
            return "paper"
        } else if (randomNumber == 2){
            return "scissors"
        }
    }

    let playerSelection = prompt("Choose a hand by typing Rock, Paper or Scissors. First to 3 wins!").toLowerCase()
    console.log(playerSelection);

    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    
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
//alert(playRound());

//Janken function calls the playRound function inside of it 5 times to play a 5 round game that keeps score and reports a winner at the end.
    //why does the janken function stop after executing one loop out of 5 => because after i leave the fucntion the rest of the for loop is not executed. 
    //to execute the all 5, the for loop needs to be "somewhere else".
function Janken(){
    for (let i = 0; i <= 4; i++){
        alert(playRound());
        } 
}

function getFinalResult(){
    if (playerScore = computerScore){
        return "DRAW"
    } else if (computerScore <= 3){
        return "You Lose..."
    } else if (playerScore <= 3){
        return "YOU WIN!!!"
    }
}
console.log(Janken());
console.log("player: " + playerScore);
console.log("computer: " + computerScore);
console.log(getFinalResult());
//alert(Janken());