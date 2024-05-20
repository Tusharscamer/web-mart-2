let currPlayer = "X";
const arr = Array(9).fill(null);
const winner = document.querySelector(".winner");
const turn = document.querySelector(".turn");
const typ = document.querySelector(".typ");
const mode = document.querySelector(".mode");
const colorRoot = document.querySelector(":root")

function checkWinner() {
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
    winner.style.display = "visible";
    winner.innerHTML = `<h2>The Winner is "${currPlayer}"</h2>`;
    winner.style.transform = "translate(0, 0)";
    winner.style.transition = "all 0.3s ease";
    return;
  }
  if (!arr.some((e) => e === null)) {
    winner.innerHTML = `<h2>Game is Draw!</h2>`;
    winner.style.transform = "translate(0, 0)";
    winner.style.transition = "all 0.3s ease";
    return;
  }
}

function otherPlayer() {
  if (winner.innerHTML == "") {
    let id = Math.floor(Math.random() * 10);
    while (arr[id] !== null) {
      id = Math.floor(Math.random() * 10);
    }
    arr[id] = document.getElementById(id).innerHTML = currPlayer;
    checkWinner();
    currPlayer = currPlayer === "X" ? "O" : "X";
    turn.innerHTML = currPlayer === "X" ? "Turn - X" : "Turn - O";
  }
}

function handleClick(ele) {
  if (winner.innerHTML == "") {
    let id = Number(ele.id);
    if (arr[id] !== null) return;
    arr[id] = ele.innerHTML = currPlayer;
    checkWinner();
    currPlayer = currPlayer === "X" ? "O" : "X";
    turn.innerHTML = currPlayer === "X" ? "Turn - X" : "Turn - O";
    if(typ.innerHTML === "Solo")
      otherPlayer();
  }
}

mode.addEventListener("click", ()=>{
  if(mode.innerHTML==="Dark"){
    colorRoot.style.setProperty('--bg-color', '#00aaaa');
    colorRoot.style.setProperty('--color', '#c0fafa');
    colorRoot.style.setProperty('--hover-bg-color', '#c0faff');
    colorRoot.style.setProperty('--active-bg-color', '#abe9ef');
    colorRoot.style.setProperty('--disabled-color', '#019595');
    
    mode.innerHTML = "Light";
  }
  else{
    colorRoot.style.setProperty('--bg-color', '#c0fafa');
    colorRoot.style.setProperty('--color', '#00aaaa');
    colorRoot.style.setProperty('--hover-bg-color', '#00b0b0');
    colorRoot.style.setProperty('--active-bg-color', '#059f9f');
    colorRoot.style.setProperty('--disabled-color', '#007474');

    mode.innerHTML = "Dark";
  }
})

typ.addEventListener("click", ()=> typ.innerHTML==="Duo" ? typ.innerHTML="Solo" : typ.innerHTML="Duo");

document.querySelector(".reset").addEventListener("click", () => {
  window.location.reload();
  winner.style.display = 'visible'
});
