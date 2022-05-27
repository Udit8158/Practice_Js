// Grabing the sounds from dum
const sounds = [
  "./sounds/crash.mp3",
  "./sounds/kick-bass.mp3",
  "./sounds/snare.mp3",
  "./sounds/tom-1.mp3",
  "./sounds/tom-2.mp3",
  "./sounds/tom-3.mp3",
  "./sounds/tom-4.mp3",
];

// Grabing elements
const drumBtns = document.querySelectorAll(".drum");

// Playing drums with buttons
drumBtns.forEach((e) => {
  console.log(e);
  e.addEventListener("click", () => {
    // console.log("clicked", e.innerText);
    let btnText = e.innerText;
    let audioElement;
    // Check btn and play
    switch (btnText) {
      case "w":
        audioElement = new Audio(sounds[0]);
        e.classList.add("pressed");
        setTimeout(() => {
          e.classList.remove("pressed");
        }, 100);
        break;
      case "a":
        audioElement = new Audio(sounds[1]);
        e.classList.add("pressed");
        setTimeout(() => {
          e.classList.remove("pressed");
        }, 100);
        break;
      case "s":
        audioElement = new Audio(sounds[2]);
        e.classList.add("pressed");
        setTimeout(() => {
          e.classList.remove("pressed");
        }, 100);
        break;
      case "d":
        audioElement = new Audio(sounds[3]);
        e.classList.add("pressed");
        setTimeout(() => {
          e.classList.remove("pressed");
        }, 100);
        break;
      case "j":
        audioElement = new Audio(sounds[4]);
        e.classList.add("pressed");
        setTimeout(() => {
          e.classList.remove("pressed");
        }, 100);
        break;
      case "k":
        audioElement = new Audio(sounds[5]);
        e.classList.add("pressed");
        setTimeout(() => {
          e.classList.remove("pressed");
        }, 100);
        break;
      case "l":
        audioElement = new Audio(sounds[6]);
        e.classList.add("pressed");
        setTimeout(() => {
          e.classList.remove("pressed");
        }, 100);
        break;
      default:
        break;
    }
    // Play
    audioElement.play();
  });
});

// Playing drums with keystokes

document.addEventListener("keypress", (event) => {
  let keyName = event.key;
  let audioElement;
  switch (keyName) {
    case "w":
      audioElement = new Audio(sounds[0]);
      //Add pressed class
      drumBtns[0].classList.add("pressed");
      // And remove after some fraction of sec.
      setTimeout(() => {
        drumBtns[0].classList.remove("pressed");
      }, 100);
      break;
    case "a":
      audioElement = new Audio(sounds[1]);
      drumBtns[1].classList.add("pressed");
      setTimeout(() => {
        drumBtns[1].classList.remove("pressed");
      }, 100);
      break;
    case "s":
      audioElement = new Audio(sounds[2]);
      drumBtns[2].classList.add("pressed");
      setTimeout(() => {
        drumBtns[2].classList.remove("pressed");
      }, 100);
      break;
    case "d":
      audioElement = new Audio(sounds[3]);
      drumBtns[3].classList.add("pressed");
      setTimeout(() => {
        drumBtns[3].classList.remove("pressed");
      }, 100);
      break;
    case "j":
      audioElement = new Audio(sounds[4]);
      drumBtns[4].classList.add("pressed");
      setTimeout(() => {
        drumBtns[4].classList.remove("pressed");
      }, 100);
      break;
    case "k":
      audioElement = new Audio(sounds[5]);
      drumBtns[5].classList.add("pressed");
      setTimeout(() => {
        drumBtns[5].classList.remove("pressed");
      }, 100);
      break;
    case "l":
      audioElement = new Audio(sounds[6]);
      drumBtns[6].classList.add("pressed");
      setTimeout(() => {
        drumBtns[6].classList.remove("pressed");
      }, 100);
      break;
    default:
      break;
  }
  audioElement.play();
});
