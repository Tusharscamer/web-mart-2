const box = document.querySelectorAll(".box");
const rgbRandom = document.querySelector(".rgb-random");
const colours = document.querySelector(".colours");

let live = 3;
let score = 0;
let randomColour = null;

function generateRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function increaseScore() {
  document.getElementById("scoreNum").innerText = ++score;
}

function validateResult(ele) {
  if (ele.target.style.backgroundColor === randomColour) {
    console.log(true);
    increaseScore();
    startGame();
    if(live != 3) document.getElementById("liveNum").innerText = ++live;
  } else {
    console.log(false);
    document.getElementById("liveNum").innerText = --live;
    if(live == 0) window.location.reload();
  }
}

function startGame() {
    colours.innerHTML = null;
  randomColour = generateRandomColor();
  rgbRandom.innerText = randomColour;
  randomPlace = Math.floor(Math.random() * 6);

  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    div.addEventListener("click", validateResult);
    div.className = `box ${i + 1}`;
    div.style.backgroundColor =
      randomPlace === i ? randomColour : generateRandomColor();
    colours.append(div);
  }
}

window.addEventListener("load", () => startGame());
