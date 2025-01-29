//Function getComputerChoice
    // create variable x
    // create variable y
    //assign x a random number 0-99
    //if x is < 33 --> assign y to "Rock"
    //if x is > 33 and x < 66, assign y to "Paper"
    //if x is > 66, assign y to "Scissors"
    //return y
function getComputerChoice() {
    let x = Math.floor(Math.random()* 100);
    let y;
    if (x <= 33) {
        y = "rock"
    }
    else if (x > 33 && x < 66) {
        y = "paper"
    }
    else {
        y = "scissors"
    }
    return y;
}
//Function getHumanChoice
    //create variable x
    //assign x to user input ("Rock", "Paper", or "Scissors")
    //catch exceptions if user input varies
    //return x
function getHumanChoice() {
    let keepGoing = true;
    let x = prompt("Please choose Rock, Paper, or Scissors: ");
    x = x.toLowerCase();
    while(keepGoing) {
        if (x !== "rock" && x != "paper" && x != "scissors") {
            console.log("Please enter a valid choice.");
            x = prompt("Invalid, choice. Please choose Rock, Paper, or Scissors: ");
            x = x.toLowerCase();
        }
        else {
            keepGoing = false;
            return x;
        }
    }
}
function playGame() { 
    let humanScore = 0;
    let computerScore = 0;
    //Function playRound
    //take parameters computerChoice and humanChoice
    //Compare choices using if/else if
    //if playerchoice = rock and computerchoice = rock -> tie
    //if playerchoice = rock and computerchoice = paper -> computer wins
    //  increment computerscore
    //if playerchoice = rock and computerchoice = scissors -> player wins
    //  increment playerscore
    //if playerchoice = scissors etc.
    function playRound(computerChoice, humanChoice) {
        if(computerChoice == humanChoice) {
            console.log("It's a tie! The score is: " + computerScore + " to " + humanScore);
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1;
            console.log("You win! The score is: " + computerScore + " to " + humanScore);
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore += 1;
            console.log("The computer wins! The score is: " + computerScore + " to " + humanScore);
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore += 1;
            console.log("The computer wins! The score is: " + computerScore + " to " + humanScore);
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1;
            console.log("You win! The score is: " + computerScore + " to " + humanScore);
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore += 1;
            console.log("The computer wins! The score is: " + computerScore + " to " + humanScore);
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore += 1;
            console.log("You win! The score is: " + computerScore + " to " + humanScore);
        }
        else {
            console.log("ERROR");
        }
    };

    for (round=0; computerScore < 5 && humanScore < 5; round++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
}

playGame();
