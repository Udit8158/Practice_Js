// Desturcturing of array
let myArr = [1, 2, 3, 4];
let [a, b, c, d] = myArr;

console.log(a); // 1

// Desturcturing of object
let myObj = {
  myName: "Udit",
  age: "18",
};
let { myName: name, age } = myObj;
console.log(name); // Udit  (Means if you want to change the name of the variable then  like this....)

// Destructuring of nested array...
let arr = ["Udit", 12, 2004, ["JS", "Python"]];

let [Name, Age, birthYear, programmingLanguage] = arr;
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
