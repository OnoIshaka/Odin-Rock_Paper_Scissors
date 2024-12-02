// console.log('Hello World')
//Get Computer CHoice

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "Rock".toLowerCase();
    }
    else if (randomNumber === 2) {
        return "Paper".toLowerCase();
    }
    else {
        return "Scissors".toLowerCase();
    }
}

// console.log(getComputerChoice())

//Get Human Choice

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors: ");
    return choice.toLowerCase();
}

// console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;
let rounds = 5;
  

function playGame() {


//playRound Function declaration

function playRound(humanChoice, computerChoice) {

humanChoice = getHumanChoice();
computerChoice = getComputerChoice();

    if (humanChoice == computerChoice){
        console.log("It's a Tie")
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore++;
        console.log('Paper beats Rock')
        
    }
    else if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore++;
        console.log('Paper beats Rock')
        
    }
    else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        computerScore++;
        console.log('Scissors beats Paper')
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        humanScore++;
        console.log('Scissors beats Paper')
        
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        humanScore++;
        console.log('Rock beats Scissors')
        
    }
    else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        computerScore++;
        console.log('Rock beats Scissors')
        
    }
  }

  //loop to play 5 times
  for ( let i = 0; i < rounds; i++) {
    console.log(playRound());
  }

  //Declare Winner
  if (humanScore > computerScore) {
    console.log('You win ! Good Job')
  
  }
  else if (computerScore > humanScore) {
    console.log('Computer Wins! Bettr Luck Next time')
  }

  else {
    console.log('Tie Game!')
  }
}

playGame();