///// ES 6 SYNTAX OF OOPS - CLASS ///////

// Making Employee (Parent) class
class Employee {
  // 1.  constructor function
  constructor(name, age, salary) {
    (this.Name = name), (this.Age = age), (this.Salary = salary);
  }
  // Prototype function (You must use this type of syntax in class to directly store methods in prototype)
  present() {
    return `Hi, ${this.Name} is present.`;
  }
  //3. Static function (You can only use it with class itself)
  static slogan() {
    return `This company is the best.`;
  }
  // 4. static props
  static companyName = "Google";
}

// Making Programmer (child) class and inherit with Employee
class Programmer extends Employee {
  constructor(name, age, salary, role, language) {
    // Means inherit this 3 props from Employee
    super(name, age, salary);
    (this.Role = role), (this.Language = language);
  }
  sayHello() {
    return `Hello, world.....`;
  }
  debug() {
    // We can also use a Parent's method inside own method like the way...
    console.log(super.present());
    // Use own's method
    console.log(this.sayHello());
    return `Hey, It is ${this.Name} is debugging...`;
  }
  static programmerSlogan() {
    return `We all are programmer....`;
  }
}

const employee1 = new Employee("Hitesh", 23, "45 LPA");
console.log(employee1);

const programmer1 = new Programmer(
  "Vishwajeet",
  28,
  "30 LPA",
  "Web Devoloper",
  ["Js", "Python"]
);
console.log(programmer1);
// console.log(programmer1.present());
console.log(programmer1.debug());
// console.log(programmer1.slogan()); // This will not work
// console.log(employee1.slogan()); // This will not work
