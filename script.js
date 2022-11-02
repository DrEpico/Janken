// a fucntion that randomely return either "rock", "paper" or "scissors"
    // a function that calls the random number function which returns a number netween 0 to 1. Multiplying the retunerned number by 3 will give numbers between 0, 1 or 2.
    // the function will return either "rock", "paper" or "scissors" based on the number that getComputerChoice() returns. (0=rock, 1=paper, 2=scissors) 
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
console.log(getComputerChoice());
