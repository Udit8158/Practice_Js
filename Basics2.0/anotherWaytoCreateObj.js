let user = new Object();
user.name = "Udit";
user.age = 18;
// console.log(user);

//Using of Object.create method

let User = {
  firstName: "",
  lastName: "",
  courseCount: "",
  getCourseCount: function () {
    return `You have ${this.courseCount} courses`;
  },
};

// console.log(User);

let user1 = Object.create(User); //Actually all of "User" property are going to add in  the prototype section (See it on browser)
user1.firstName = "Udit";
console.log(user1.firstName);
console.log(user1);

//Ideal way to use Object.create method
let user2 = Object.create(User, {
  firstName: { value: "Jonny" },
  lastName: { value: "Stark" },
  courseCount: { value: 34 },
});
console.log(user2.getCourseCount());
console.log(user2.firstName); //This give us "Jhonny"
