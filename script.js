function getComputerChoice() {
  let choiceRandom = Math.random();
  if (choiceRandom < 0.33) {
    return "rock";
  } else if (choiceRandom < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const choice = window.prompt("Rock / Paper / Scissors").toLowerCase();
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore < computerScore) {
    console.log("Computer won the game!");
  } else {
    console.log("The game is a tie!");
  }
}

playGame();
