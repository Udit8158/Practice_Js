console.log("Welcome..");

// Grab the dice images
const diceImagePaths = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

// Grab the elements
const imgTags = document.querySelectorAll(".img");
const mainHeading = document.querySelector("#mainHeading");

// Main function
const runDiceGame = () => {
  // Generating random number to randomly move dice
  let randomNumberForDice1 = Math.floor(Math.random() * 6);
  let randomNumberForDice2 = Math.floor(Math.random() * 6);

  // Set dice value randomly as the random number above
  imgTags[0].setAttribute("src", diceImagePaths[randomNumberForDice1]);
  imgTags[1].setAttribute("src", diceImagePaths[randomNumberForDice2]);

  // Declare winner on the basis of greater dice value
  if (randomNumberForDice1 > randomNumberForDice2) {
    mainHeading.innerHTML = "Player 1 wins !";
  } else if (randomNumberForDice1 === randomNumberForDice2) {
    mainHeading.innerHTML = "Game tie refresh again ";
  } else {
    mainHeading.innerHTML = "Player 2 wins !";
  }
};

// Declare funcion onload
window.onload = runDiceGame();
