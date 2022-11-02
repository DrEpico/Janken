// a fucntion that randomely return either "rock", "paper" or "scissors"
    // a function that calls the random number function which returns a number out 0 to 1. Multiplying the retunerned number by 3 will give numbers between 0, 1 or 2. 
function getComputerChoice(){ 
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber
}
console.log(getComputerChoice());