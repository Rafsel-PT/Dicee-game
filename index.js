// Generate random number for Player 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log("Random number for Player 1:", randomNumber1);

// Set the dice image for Player 1
let randomDiceImage1 = `images/dice${randomNumber1}.png`; // Correctly format the file path as a template literal
document.querySelector(".img1").setAttribute("src", randomDiceImage1);

// Generate random number for Player 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log("Random number for Player 2:", randomNumber2);

// Set the dice image for Player 2
let randomDiceImage2 = `images/dice${randomNumber2}.png`; // Correctly format the file path as a template literal
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

// Determine the winner and update the header
let header = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  header.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  header.textContent = "Player 2 Wins! 🚩";
} else {
  header.textContent = "It's a Draw!";
}


