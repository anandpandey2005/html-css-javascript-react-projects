const userScoreElement = document.querySelector(".user-score");
const botScoreElement = document.querySelector(".bot-score");
const gameCountElement = document.querySelector(".times");
const resetButton = document.querySelector(".reset button");
const optionButtons = document.querySelectorAll(".options button");
const instructorElement = document.querySelector(".instructor");

let userScore = 0;
let botScore = 0;
let gameCount = 0;

function getBotChoice() {
  const choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userChoice, botChoice) {
  if (userChoice === botChoice) {
    return "tie";
  } else if (
    (userChoice === "rock" && botChoice === "scissor") ||
    (userChoice === "scissor" && botChoice === "paper") ||
    (userChoice === "paper" && botChoice === "rock")
  ) {
    return "user";
  } else {
    return "bot";
  }
}

function updateScore(winner) {
  if (winner === "user") {
    userScore++;
    userScoreElement.textContent = userScore;
  } else if (winner === "bot") {
    botScore++;
    botScoreElement.textContent = botScore;
  }
}

function updateGameCount() {
  gameCount++;
  gameCountElement.textContent = gameCount;
}

optionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const userChoice = button.textContent;
    const botChoice = getBotChoice();
    const winner = determineWinner(userChoice, botChoice);
    updateScore(winner);
    updateGameCount();
    instructorElement.textContent = `You chose ${userChoice}, Bot chose ${botChoice}. ${
      winner === "user"
        ? "You win!"
        : winner === "bot"
        ? "Bot wins!"
        : "It's a tie!"
    }`;
  });
});

resetButton.addEventListener("click", () => {
  userScore = 0;
  botScore = 0;
  gameCount = 0;
  userScoreElement.textContent = userScore;
  botScoreElement.textContent = botScore;
  gameCountElement.textContent = gameCount;
  instructorElement.textContent = "START GAME";
});

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const mobileNav = document.querySelector(".mobile-nav");

  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });
});
