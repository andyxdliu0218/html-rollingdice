const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

let a = generateDice();
let b = generateDice();
let title = document.querySelector(".container h1");
if (a === b) {
  title.innerHTML = "Draw!";
} else if (a > b) {
  title.innerHTML = "&#128681 Player 1 Wins!";
} else {
  title.innerHTML = "Player 2 Wins! &#128681";
}
helper(img1, a);
helper(img2, b);

function helper(ele, dice) {
  if (dice === 1) {
    ele.setAttribute("src", "./images/dice1.png");
  }
  if (dice === 2) {
    ele.setAttribute("src", "./images/dice2.png");
  }
  if (dice === 3) {
    ele.setAttribute("src", "./images/dice3.png");
  }
  if (dice === 4) {
    ele.setAttribute("src", "./images/dice4.png");
  }
  if (dice === 5) {
    ele.setAttribute("src", "./images/dice5.png");
  }
  if (dice === 6) {
    ele.setAttribute("src", "./images/dice6.png");
  }
}

function generateDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  return dice;
}
