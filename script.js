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
