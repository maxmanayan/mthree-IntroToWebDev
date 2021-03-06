// Creator: Max Manayan
// Assignment: Lucky Sevens
// Submitted: August 2021

const startingBet = document.getElementById("starting-bet");
const errorMessage = document.getElementById("error-message");

const resultsTable = document.getElementById("res-table");
const resultsStartingBet = document.getElementById("res-starting-bet");
const resultsTotalRolls = document.getElementById("res-total-rolls");
const resultsHighestAmount = document.getElementById("res-highest-amount");
const resultsRollAtHighest = document.getElementById("res-roll-at-highest");

let diceSum = 0;

// Is called after the 'Play' button is clicked
function validateBet() {
  let bet = Number(startingBet.value);
  if (bet < 1) {
    displayError();
  } else {
    playSevens(bet);
  }
  return false;
}

// Displays an error message when bet is less than $1.00
function displayError() {
  errorMessage.style.display = "block";
  return false;
}

// The highest order function for game mechanics
function playSevens(bet) {
  errorMessage.style.display = "none";
  resultsTable.style.display = "none";

  let gameMoney = bet;
  const totalMoney = [];

  while (gameMoney > 0) {
    rollDice();
    if (diceSum === 7) {
      gameMoney += 4;
    } else {
      gameMoney -= 1;
    }
    totalMoney.push(gameMoney);
  }

  if (gameMoney === 0) {
    displayResults(totalMoney);
  }

  return false;
}

// Generates two random dice rolls, is called in playSevens()
function rollDice() {
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  diceSum = die1 + die2;
}

// Displays results table
function displayResults(totalMoney) {
  resultsTable.style.display = "block";
  resultsStartingBet.innerText = `$${startingBet.value}.00`;
  resultsTotalRolls.innerText = `${totalMoney.length}`;
  resultsHighestAmount.innerText = `$${Math.max(...totalMoney)}.00`;
  resultsRollAtHighest.innerText = `${
    totalMoney.indexOf(Math.max(...totalMoney)) + 1
  }`;
}

// Resets the game
function resetGame() {
  errorMessage.style.display = "none";
  resultsTable.style.display = "none";
  startingBet.innerText = null;
}
