// Desturcturing of array
let myArr = [1, 2, 3, 4];
let [a, b, c, d] = myArr;

console.log(a); // 1

// Desturcturing of object
let myObj = {
  myName: "Udit",
  age: "18",
};
// let { myName: name, age } = myObj;
console.log(name); // Udit  (Means if you want to change the name of the variable then  like this....)

// Destructuring of nested array...
let arr = ["Udit", 12, 2004, ["JS", "Python"]];

// let [Name, Age, birthYear, programmingLanguage] = arr;
let [second, first] = programmingLanguage;

console.log(Name, programmingLanguage, second);

// Complex obj desturcturing
let employee = {
  role: "SDE 3",
  salary: "79 LPA",
  works: {
    firstWork: "Coding",
    secondWork: "Management",
  },
};

let {
  role,
  salary: jobSalary,
  works: { firstWork: f, secondWork: s },
} = employee; // If you want to change a name.

console.log(role, jobSalary, f);

///// More on destructure ///////////

// Array Destructuring
const arr1 = [1, 2, 3, 4];
const arr2 = ["a", "b", "c", "d"];

const [A, B, ...rest] = arr1;
const [C, , E] = arr2; // Means C = a and E = c (skip 'b')
console.log(A, E, rest); // Rest - [3,4] using rest operator

const arr3 = [...arr1, ...arr2];
console.log(arr3); // Concadination of multiple array

// Object destructuring
const obj1 = {
  name: "Udit",
  age: 18,
  woks: {
    code: "Vs code",
    company: "Microsoft",
  },
};

const obj2 = {
  role: "Web Dev",
  programmingLanguage: "JavaScript",
};

const { name: Name, age, favFood = "Briyani" } = obj1; // Setting default value of favFood
console.log(Name, favFood); // Udit (changing 'name' into "Name")

const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // Conadination object (IMP)

const objFunc = (obj) => {
  console.log(`Name is ${obj.name} and age is ${obj.age}`);
};
objFunc(obj1);

// Using destructure inside function (Very important for react)
const objAdvFunc = ({ name, age }) => {
  console.log(`Name is ${name} and age is ${age}`);
};

objAdvFunc(obj1);
