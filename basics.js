console.log("Welcome");

//Varibales  - var,let and const.
let myName = "Jhone";
// console.log(myName);
{
  let myName = "Udit";
  const myAge = 18;
  // console.log(`My name is ${myName}`);
  // console.log(typeof myName, typeof myAge);
}

// String Props
const myStatement = "I am Udit and I am learning web dev.";
// console.log(myStatement.length);
// console.log(myStatement.charAt(3));
// console.log(myStatement.replace("am", "are"));
// console.log(myStatement.search("Udit"));

// Conditionals
const age = 22;
if (age >= 18) {
  // console.log("You are adult");
} else {
  // console.log("You aren't adult.");
}

age >= 18 ? console.log("You are adult") : console.log("You aren't adult.");

// Function
// function greetings(name) {
//   console.log("Hello ", name);
// }

const greetings = (name) => console.log(`Hello ${name}`);

// greetings("Udit");

// Array
// const fruits = ["Apple", "Banana", "Pineapple", "Mango"];
const fruits = new Array("Apple", "Banana", "Pineapple", "Mango");
const places = new Array("Delhi", "Bangalore", "Kolkata", "Mumbai");

// console.log(fruits, typeof fruits);

const concatedArray = fruits.concat(places);
// console.log(concatedArray);

// console.log(fruits.copyWithin(0, 3));

// console.log(places.entries().next().value);

// console.log(fruits.includes("ple")); // => Return false

const str = "Hey there, Udit here.";
// console.log(str.slice(0, 5));
// console.log(fruits.slice(1, 4));

// Every and some method of array........
// const letterCheckingFunction = (element) => element.includes("a");

// console.log(fruits.every(letterCheckingFunction)); // False

const numArr = [1, 2, 3, 4];

// const isEven = (num) => num % 2 == 0;

// console.log(numArr.some(isEven)); // True

// const numbers = [10, 23, 232, 22, 21, 45, 34];

// const isDivisibleBy3 = (num) => num % 3 === 0;

// // console.log(isDivisibleBy3(3));
// const result = numbers.every(isDivisibleBy3);
// console.log(result);

// console.log(fruits.sort()); // sorting the array.

// // Map method of array
// const numbersGreaterThan1Function = (num) => {
//   if (num > 1) {
//     return num;
//   }
// };

// const numbersGreaterThan1 = numArr.map(numbersGreaterThan1Function);

// console.log(numbersGreaterThan1);

// const finalResult = numbersGreaterThan1.filter((x) => x !== undefined); // Using of fileter

// console.log(finalResult);

// const newArr = numArr.filter((num) => num > 1); // M2 (One line of code.....)

// console.log(numArr);
// console.log(numArr.copyWithin(0, 3, 4));

// console.log(numArr.fill(4, 0, 2));

const numArr2 = [1, 23, 432, [2, 32]];

// console.log(numArr2);
// console.log(numArr2.flat);

// console.log(numArr2.join()); // With space
// console.log(numArr2.join("")); // without space.

// OBJECT ................

const user = {
  name: "Udit",
  age: 18,
  isVerified: true,
  courseNumber: 2,
  courseList: ["React Js Course", "Solidity Course"],
  buyCourse: function (courseName) {
    console.log(
      `Hey, ${this.name} you bought ${courseName} course successfully.`
    );
    this.courseNumber++;
    this.courseList.push(courseName);
  },
};

// console.log(user.courseList);
user.buyCourse("Web3.js");
// console.log(user.courseList);

// console.log(Object.values(user));

// Itriation of an object
for (const key in user) {
  // console.log(key, "      ,    ", user[key]);
}

// Random number generator in a percent 1 to 100

// let randomNumber = Math.random();
// randomNumber = Math.round(randomNumber * 6) + 1;
// console.log(randomNumber);

/////////  FizzBuzz Game challange ////////////////////

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//     continue;
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//     continue;
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//     continue;
//   } else {
//     i = i;
//   }
//   console.log(i);
// }

let names = ["Udit", "Harry", "Hitesh", "Angela"];

const whoPay = (name) => {
  let randomNumber = Math.floor(Math.random() * name.length);
  return name[randomNumber];
};

console.log(whoPay(names));

// Fibonacci problem

const fibGen = (n) => {
  let resultArr = [];
  if (n === 0) {
    return "Atleast give one output.";
  } else if (n === 1) {
    resultArr = [0];
  } else if (n === 2) {
    resultArr = [0, 1];
  } else {
    resultArr = [0, 1];
    let presentVal = 1;
    let prevVal = 0;
    let mainVal;
    while (resultArr.length < n) {
      mainVal = presentVal + prevVal;
      resultArr.push(mainVal);
      prevVal = presentVal;
      presentVal = mainVal;
    }
  }
  return resultArr;
};

console.log(fibGen(7));
