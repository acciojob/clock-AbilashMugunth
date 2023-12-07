//your JS code here. If required.
let timerDisplay = document.querySelector("#timer");
let day = new Date();
timerDisplay.innerText = `${day.toLocaleDateString()}, ${day.toLocaleTimeString()}`;

function time() {
  setInterval(() => {
    let day = new Date();

    console.log(day.toLocaleDateString());
    console.log(day.toLocaleTimeString());

    timerDisplay.innerText = `${day.toLocaleDateString()}, ${day.toLocaleTimeString()}`;
  }, 1000);
}

time();
