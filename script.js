console.log('Hello World')


function getComputerChoice(rand) {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "Rock";
    }
    else if (randomNumber === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

// console.log(getComputerChoice())

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors: ");
    return choice;
}

// console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    if (humanChoice == computerChoice){
        console.log("It's a Tie")
    }
    
    else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log('Paper beats Rock')
        humanScore++;
    }
    else if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log('Paper beats Rock')
        computerScore++;
    }
    else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log('Scissors beats Paper')
        computerScore++;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log('Scissors beats Paper')
        humanScore++;
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log('Rock beats Scissors')
        humanScore++;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log('Rock beats Scissors')
        computerScore++;
    }
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  