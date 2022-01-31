function init() {
  console.log("Running init func");
  let name = "Udit";
  function sayName() {
    console.log(name);
  }
  return sayName;
}

// let result = init();
// result();
init()(); // This style is call closure style   : means run init and then run the func which is referred by init
// sayName();

function doAdd(x) {
  function subAdd(y) {
    console.log(x + y);
  }
  return subAdd; // Means it gives a reference
}

// let add5 = doAdd(5);
// add5(2);  //Same

doAdd(5)(2); // This give 7
