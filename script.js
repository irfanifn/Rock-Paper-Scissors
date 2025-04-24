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
