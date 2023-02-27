let player1 = document.getElementById("image1");
let player2 = document.getElementById("image2");
let result = document.getElementById("result");

// first player ===============================
let num1 = 1;
let num2 = 7;
let value1 = Math.trunc(num1 + (num2 - num1) * Math.random());
console.log("first " + value1);

if (value1 == 1) {
  player1.src = "images/dice1.png";
}
if (value1 == 2) {
  player1.src = "images/dice2.png";
}
if (value1 == 3) {
  player1.src = "images/dice3.png";
}
if (value1 == 4) {
  player1.src = "images/dice4.png";
}
if (value1 == 5) {
  player1.src = "images/dice5.png";
}
if (value1 == 6) {
  player1.src = "images/dice6.png";
}

// second player =====================================
let num3 = 1;
let num4 = 7;
let value2 = Math.trunc(num3 + (num4 - num3) * Math.random());
console.log("second " + value2);

if (value2 == 1) {
  player2.src = "images/dice1.png";
}
if (value2 == 2) {
  player2.src = "images/dice2.png";
}
if (value2 == 3) {
  player2.src = "images/dice3.png";
}
if (value2 == 4) {
  player2.src = "images/dice4.png";
}
if (value2 == 5) {
  player2.src = "images/dice5.png";
}
if (value2 == 6) {
  player2.src = "images/dice6.png";
}

// result ==================================
if (value1 == value2) {
  result.innerHTML = "Draw!";
}
if (value1 > value2) {
  result.innerHTML = "🚩Player 1 Wins!";
}
if (value1 < value2) {
  result.innerHTML = "Player 2 Wins!🚩";
}
