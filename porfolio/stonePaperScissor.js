
const botImage = document.querySelector(".computer-image img");
const userImage = document.querySelector(".player-image img");
const botScoreElement = document.querySelector(".cmp-score");
const userScoreElement = document.querySelector(".ply-score");
const options = document.querySelectorAll(".option");

let botScore = 0;
let userScore = 0;

const choices = ["stone", "paper", "scissors"];
const images = {
  stone: {
    bot: "gameImages/stoneComputer.png",
    user: "gameImages/stonePlayer.png",
  },
  paper: {
    bot: "gameImages/paperComputer.png",
    user: "gameImages/paperPlayer.png",
  },
  scissors: {
    bot: "gameImages/scissorsComputer.png",
    user: "gameImages/scissorsPlayer.png",
  },
};


function getBotChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


function determineWinner(userChoice, botChoice) {
  if (userChoice === botChoice) {
    return "draw";
  } else if (
    (userChoice === "stone" && botChoice === "scissors") ||
    (userChoice === "paper" && botChoice === "stone") ||
    (userChoice === "scissors" && botChoice === "paper")
  ) {
    return "user";
  } else {
    return "bot";
  }
}


function updateImages(userChoice, botChoice) {
  userImage.src = images[userChoice].user;
  botImage.src = images[botChoice].bot;
}


function updateScores(winner) {
  if (winner === "user") {
    userScore++;
    userScoreElement.textContent = userScore;
  } else if (winner === "bot") {
    botScore++;
    botScoreElement.textContent = botScore;
  }
}


function playGame(userChoice) {
  const botChoice = getBotChoice();
  const winner = determineWinner(userChoice, botChoice);
  updateImages(userChoice, botChoice);
  updateScores(winner);


  botImage.classList.add("botshake");
  userImage.classList.add("usershake");


  setTimeout(() => {
    botImage.classList.remove("botshake");
    userImage.classList.remove("usershake");
  }, 800);
}


options.forEach((option) => {
  option.addEventListener("click", (event) => {
    const userChoice = event.target.textContent.toLowerCase();
    playGame(userChoice);
  });
});
