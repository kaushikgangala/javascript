const formElement = document.querySelector("form");
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
});

const submitButton = document.getElementById("submit-button");

var timerInterval;

function startTimer() {
  timerInterval = setInterval(() => {
    let hoursElement = document.getElementById("hours");
    let minutesElement = document.getElementById("minutes");
    let secondsElement = document.getElementById("seconds");
    let timeElement = document.getElementById("time");
    let hours = timeElement.innerText
      ? parseInt(timeElement.innerText.split(":")[0])
      : parseInt(hoursElement.value);
    let minutes = timeElement.innerText
      ? parseInt(timeElement.innerText.split(":")[1])
      : parseInt(minutesElement.value);
    let seconds = timeElement.innerText
      ? parseInt(timeElement.innerText.split(":")[2])
      : parseInt(secondsElement.value);

    seconds--;
    console.log(hours, minutes, seconds);
    if (seconds == 0 && minutes == 0 && hours == 0) {
      console.log("stopping...", secondsElement.value);
      let timeEle = document.getElementById("time");

      timeEle.innerText = ``;
      setTimeout(() => clearInterval(timerInterval), 10);
    }
    if (seconds < 0) {
      minutes--;
      if (minutes < 0) {
        hours--;

        minutes = 59;
      }
      seconds = 59;
    }
    timeElement.innerText = `${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }, 1000);
}

submitButton.addEventListener("click", () => {
  startTimer();
});

const stopButton = document.getElementById("stop-timer");
stopButton.addEventListener("click", () => {
  clearInterval(timerInterval);
});

const resetButton = document.getElementById("reset-timer");
resetButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  let timeElement = document.getElementById("time");

  timeElement.innerText = "";
});
