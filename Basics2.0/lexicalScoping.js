// Lexical Scoping

function init() {
  let name = "Udit";
  function sayName() {
    let newVar = "kundu";
    console.log("5", name);
    console.log("6", newVar);
  }
  sayName();
  console.log("9", name);
  // console.log("10", newVar); // This throw err
}

init();

// console.log(name);    // It throw err
