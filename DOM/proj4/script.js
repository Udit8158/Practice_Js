// Grab some required elements
const cards = document.querySelectorAll(".card");
const turnCountSection = document.querySelector("#turnCountSection");

// Defining variables
let isFilipped = false;
let turnCount = 0;
let firstCard, secondCard;

// Writting the methods
// flip for flipping when click and track card and turn records
function flip() {
  this.classList.add("flip");
  // Cross logic
  if (!isFilipped) {
    isFilipped = true;
    // console.log(firstCard);
    firstCard = this;
    // console.log(firstCard);
  } else {
    // console.log(secondCard);
    secondCard = this;
    // console.log(secondCard);
    turnCount += 1;
    // console.log(firstCard, secondCard);
    cheeckWin();
  }
}

// cheeckWin cheeck the two cards are same or not by their data atribute
function cheeckWin() {
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    failure();
  }
}

// success method reveal all cards and turn after being succeed
function success() {
  // console.log("success");
  setTimeout(() => {
    cards.forEach((card) => card.classList.add("flip"));
    turnCountSection.innerHTML = `You completed this Mind Game in ${turnCount} turns`;
  }, 500);
  setTimeout(() => {
    document.location.reload(); // reload page after 5s
  }, 5000);
  // console.log(turnCount);
}

// failure method flip back two cards and rest
function failure() {
  // console.log("failure");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 500);
}

// reset method reset the value of variables back to their first state except turnCount
function reset() {
  isFilipped = false;
  [firstCard, secondCard] = [null, null]; // Use desturcture
}

// TODO: shuffle

// shuffle method suffeling the all cards and run selfly
(function shuffle() {
  cards.forEach((card) => {
    let index = Math.floor(Math.random() * 16);
    card.style.order = index;
    cards.forEach((card) => card.classList.remove("flip"));
  });
})();
// window.onload = shuffle();

// Logic apply for the game
cards.forEach((card) => card.addEventListener("click", flip));
