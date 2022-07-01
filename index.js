const totalScore = { cScore: 0, pScore: 0 };

function getComputerChoice() {
  const rpsChoice = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return rpsChoice[randomNumber];
}

function getResult(pChoice, cChoice) {
  let score;

  if (pChoice == cChoice) {
    score = 0;
  } else if (pChoice == "Rock" && cChoice == "Scissors") {
    score = 1;
  } else if (pChoice == "Paper" && cChoice == "Rock") {
    score = 1;
  } else if (pChoice == "Scissors" && cChoice == "Paper") {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}

function showResult(score, pChoice, cChoice) {
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("score");
  if (score == -1) {
    resultDiv.innerText = "You Lose!";
  } else if (score == 0) {
    resultDiv.innerText = "You Drew!";
  } else {
    resultDiv.innerText = "You Won!";
  }

  handsDiv.innerText = `👱 ${pChoice} vs 🤖 ${cChoice}`;
  playerScoreDiv.innerText = "Your Score: " + totalScore["pScore"];
}

function onClickRPS(pChoice) {
  const cChoice = getComputerChoice();

  const score = getResult(pChoice, cChoice);
  totalScore["pScore"] += score;

  showResult(score, pChoice, cChoice);
}

function playGame() {
  const playButtons = document.querySelectorAll(".playBtn");
  // playButtons[0].onclick = () => console.log(playButtons[0].value);

  playButtons.forEach((playBtn) => {
    playBtn.onclick = () => onClickRPS(playBtn.value);
  });

  const endGameButton = document.getElementById("endGameBtn");
  endGameButton.onclick = () => endGame();
}

function endGame() {
  window.location.reload();
}

playGame();
