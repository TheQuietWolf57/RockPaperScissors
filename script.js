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
let humanChoice = "";
const container = document.querySelector("#container");

const rockButton = document.createElement("button");
rockButton.classList.add("rock");
rockButton.textContent = "Rock";

const paperButton = document.createElement("button");
paperButton.classList.add("paper");
paperButton.textContent = "Paper";

const scissorsButton = document.createElement("button");
scissorsButton.classList.add("scissors");
scissorsButton.textContent = "Scissors";

const results = document.createElement("div");

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);
container.appendChild(results);

buttons = document.querySelectorAll("button");

//Function getHumanChoice
    //create variable x
    //assign x to user input ("Rock", "Paper", or "Scissors")
    //catch exceptions if user input varies
    //return x
//function getHumanChoice() {
   // let keepGoing = true;
    //let x = prompt("Please choose Rock, Paper, or Scissors: ");
  //  x = x.toLowerCase();
   // while(keepGoing) {
    //    if (x !== "rock" && x != "paper" && x != "scissors") {
     //       console.log("Please enter a valid choice.");
      //      x = prompt("Invalid, choice. Please choose Rock, Paper, or Scissors: ");
     //       x = x.toLowerCase();
      //  }
      //  else {
       //     keepGoing = false;
        //    return x;
      //  }
  //  }
//}
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
    function playRound(computerChoice, userChoice) {
        if(computerScore >= 5) {
            return("The Computer Wins!");
        }
        else if (humanScore >= 5) {
            return("You Win!");
        }

        else if(userChoice == computerChoice) {
            return("It's a tie! The score is: " + computerScore + " to " + humanScore);
        }

        else if (userChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1;
            if (humanScore >= 5) {
                return("You Win!");
            } else {
            return("You win! The score is: " + computerScore + " to " + humanScore);
            }
        }

        else if (userChoice == "rock" && computerChoice == "paper") {
            computerScore += 1;
            if(computerScore >= 5) {
                return("The Computer Wins!");
            } else{
            return("The computer wins! The score is: " + computerScore + " to " + humanScore);
            }
        }

        else if (userChoice == "scissors" && computerChoice == "rock") {
            computerScore += 1;
            if(computerScore >= 5) {
                return("The Computer Wins!");
            } else {
            return("The computer wins! The score is: " + computerScore + " to " + humanScore);
            }
        }
        else if (userChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1;
            if (humanScore >= 5) {
                return("You Win!");
            } else {
            return("You win! The score is: " + computerScore + " to " + humanScore);
            }
        }

        else if (userChoice == "paper" && computerChoice == "scissors") {
            computerScore += 1;
            if(computerScore >= 5) {
                return("The Computer Wins!");
            } else {
            return("The computer wins! The score is: " + computerScore + " to " + humanScore);
            }
        }

        else if (userChoice == "paper" && computerChoice == "rock") {
            humanScore += 1;
            if (humanScore >= 5) {
                return("You Win!");
            } else {
            return("You win! The score is: " + computerScore + " to " + humanScore);
            }
        }
        
        else {
            return("ERROR");
        }
    };
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                humanChoice = button.classList;
                results.textContent = playRound(getComputerChoice(), humanChoice);
            })
        });
    

}

playGame();