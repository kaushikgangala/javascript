const colorTag = document.getElementById("color");

const optionsContainer = document.getElementById("options-container");

let userScore = 0;
localStorage.setItem("score", userScore);
localStorage.setItem("highScore", 0);

const generateRandomNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};

const generateRandomColor = () => {
  let red = generateRandomNumber(0, 255);
  let green = generateRandomNumber(0, 255);
  let blue = generateRandomNumber(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
};

const checkOption = (el) => {
  console.log(el.target.style.backgroundColor);
  if (el.target.style.backgroundColor == color) {
    userScore++;
    localStorage.setItem("score", userScore);
  } else {
    userScore = 0;
    localStorage.setItem("score", 0);
  }
  if (Number(localStorage.getItem("highScore")) < userScore) {
    localStorage.setItem("highScore", userScore);
  }
  document.getElementById("score").innerText = `Score: ${userScore}`;
  document.getElementById("high-score").innerText = `High Score: ${Number(
    localStorage.getItem("highScore")
  )}`;
  optionsContainer.innerHTML = null;
  startGame();
};

const generateOptions = () => {
  let correctOption = generateRandomNumber(0, 3);
  for (let i = 0; i < 4; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "color-div");
    let randomColor = generateRandomColor();
    div.style.backgroundColor = i == correctOption ? color : randomColor;
    div.addEventListener("click", (div) => checkOption(div));
    optionsContainer.append(div);
  }
};

let color;

const startGame = () => {
  color = generateRandomColor();
  colorTag.innerText = color;
  generateOptions();
};

startGame();
