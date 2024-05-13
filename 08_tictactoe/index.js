let lastStart = "X";
let currentPlayer = "X";
let arr = Array(9).fill(null);
let resDisplay = document.getElementById("result");
let gameOver = false;
localStorage.setItem("scoreX", 0);
localStorage.setItem("scoreO", 0);
const rstBtn = document.getElementById("reset-btn");

let canReset = false;

resDisplay.innerText = `Turn: ${currentPlayer}`;

const checkWinner = () => {
  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    resDisplay.innerText = `Winner: ${currentPlayer}`;
    let winTimes = Number(localStorage.getItem(`score${currentPlayer}`));
    localStorage.setItem(`score${currentPlayer}`, winTimes + 1);
    gameOver = true;
    rstBtn.innerText = "RESTART";
    document.getElementById(
      `${currentPlayer}-score`
    ).innerText = `${currentPlayer}:${winTimes + 1}`;
    return true;
  }
  if (!arr.some((val) => val === null)) {
    resDisplay.innerText = "Draw!!!";
    gameOver = true;
    rstBtn.innerText = "RESTART";
  }
};

const handleClick = (el) => {
  if (el.innerText || gameOver) {
    return;
  }
  if (currentPlayer == "X") {
    el.innerText = "X";
    el.style.backgroundColor = "white";
    arr[Number(el.id)] = "X";
    if (checkWinner() || gameOver) return;

    currentPlayer = "O";
  } else {
    el.innerText = "O";
    el.style.backgroundColor = "#ffe5ec";
    arr[Number(el.id)] = "O";
    if (checkWinner() || gameOver) return;

    currentPlayer = "X";
  }
  resDisplay.innerText = `Turn: ${currentPlayer}`;
  console.log(arr);
};

rstBtn.addEventListener("click", () => {
  for (let i = 0; i < 9; i++) {
    let box = document.getElementById(i);
    box.innerText = "";
    box.style.backgroundColor = "#eae2b7";
    arr[i] = null;
  }
  gameOver = false;
  currentPlayer = lastStart == "X" ? "O" : "X";
  lastStart = currentPlayer;
  resDisplay.innerText = `Turn: ${currentPlayer}`;
  rstBtn.innerText = "RESET";
});
