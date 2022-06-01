//// OOPS BEFOR ES6 IN JS (ES5 SYNTAX) ////////////

// Construnctor  (Parent constructor Employee)
function Employee(name, age, salary, experience) {
  // You can igonre the  parenthesis (It is for code formator)
  (this.Name = name),
    (this.Age = age),
    (this.Salary = salary),
    (this.Experience = experience);
}
// Add methods in prototype in a constructor Employee
Employee.prototype.present = function () {
  return `Hey, I am ${this.Name}, and I am present.`;
};

// Inherit Programmer (Child Constructor) from Employee
function Programmer(name, age, salary, experience, role, language) {
  Employee.call(this, name, age, salary, experience), // Inherity these keys
    // these are extra keys for programmer
    (this.Role = role),
    (this.Language = language);
}
Programmer.prototype.debug = function () {
  return `Sir, ${this.Name} is debugging.`;
};

// Inherit prototype from Employee
// Programmer.prototype.__proto__ = Object.create(Employee.prototype);  // You can also write this
Programmer.prototype.__proto__ = Employee.prototype; // Right code  (Here it connect Programmer's proto with Employees's proto)
// Programmer.prototype = Employee.prototype;   // wrong code (Here it actually replace Programmer's proto with Employees's proto)

// Programmer.prototype.constructer = Programmer; // Set it's own constructer manually.

const employee1 = new Employee("Harry", 25, "34 LPA", "Intermideate");
console.log(employee1.hasOwnProperty("Name"));
console.log(employee1.present());

const programmer1 = new Programmer(
  "Udit",
  21,
  "31 LPA",
  "Begginer",
  "BlockChain Developer",
  ["JS", "Solidity"]
);
console.log(employee1);
console.log(programmer1);
console.log(programmer1.present());
