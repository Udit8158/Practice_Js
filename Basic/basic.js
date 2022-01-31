//BASIC IN JS

// console.log('This is basic');

//Type of
let num = 2;
// console.log(typeof(num));
num = 3.6;
num = String(num);
// console.log(parseInt(num));
// console.log(num,typeof(num));

//Erro handiling
// try {
//     console.log(typeof(num1));
//     console.log(num1 );
// } catch (error) {
//     console.log("num1 is not defined by Udit");
// }

//Type correction
// console.log(2 + "2");

//String Method
const myStr = "Hi, I am Udit, a newbie on JS Programming.";
// console.log(myStr.slice(0,5));

// IF and Else
// shortHand :
let age = 19;
var cheeckDrive = age >= 18 ? "You Can Drive" : "You can't drive";
// console.log(cheeckDrive);

// You can do it only for some cases means it is case limited
switch (age) {
  case age >= 18:
    // console.log("You can drive.");
    break;

  default:
    // console.log("You can't dirve.");
    break;
}

// Function
// function greet(name) {
//   return name === undefined ? `Hi` : `Hi,${name}`;
// }

let greet = (name) => {
  return name === undefined ? `Hi` : `Hi,${name}`;
};
var greetings = greet("Udit");
// console.log(greetings);

