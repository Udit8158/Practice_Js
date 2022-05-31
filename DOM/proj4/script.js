//// SELF CODE VIDEO ON OBS //////////

// Grabing the elements
const cards = document.querySelectorAll(".card");
const turnCountSection = document.querySelector("#turnCountSection");

//Logic
let firstCard;
let secondCard;
let isFillped = false;
turnCount = 0;

// Making some functions

// Flipping the cards
function flip() {
  if (!isFillped) {
    firstCard = this;
    firstCard.classList.add("flip");
    firstCardImg = firstCard.dataset.image;

    firstCardOrder = firstCard.style.order;
    isFillped = true;
  } else {
    secondCard = this;
    secondCard.classList.add("flip");

    secondCardOrder = secondCard.style.order;
    secondCardImg = secondCard.dataset.image;
    isFillped = false;
    checkWin();
  }
}

// check Win
function checkWin() {
  if (firstCardImg === secondCardImg && firstCardOrder !== secondCardOrder) {
    success();
  } else {
    fail();
  }
  turnCount++;
}

// success
function success() {
  cards.forEach((card) => {
    card.classList.add("flip");
  });
  turnCount++;
  turnCountSection.innerHTML = `Congrats, You passed the game in ${turnCount} turn`;
}

// Failure
function fail() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
  }, 500);
}

// shuffle
function shuffle() {
  cards.forEach((card) => {
    randomOrder = Math.floor(Math.random() * 16);
    card.style.order = randomOrder;
  });
}

shuffle();
cards.forEach((card) => {
  card.addEventListener("click", flip);
});
