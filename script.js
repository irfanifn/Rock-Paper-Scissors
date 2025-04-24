function getComputerChoice() {
  let choiceRandom = Math.random();

  if (choiceRandom < 0.33) {
    return "Rock";
  } else if (choiceRandom < 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  choice = window.prompt("Rock / Paper / Scissors").toLowerCase();

  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock")
  ) {
    humanScore++;
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerChoice++;
    console.log(`You lose ${computerChoice} beats ${humanChoice}`);
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
  }
  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore < computerScore) {
    console.log("compter won the game!");
  } else {
    console.log("The game is tie!");
  }
}

playGame();
