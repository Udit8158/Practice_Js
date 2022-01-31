//Creating a object with functional approach (Actually here "User" is a template)
const User = function (firstName, lastName, courseCount) {
  //We can't use arrow func here
  this.firstName = firstName;
  this.lastName = lastName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    return `You have ${courseCount} courses`;
  };
};
// console.log(User.prototype);

//Add a method externally in the prototype
User.prototype.getFirstName = function () {
  return `Your first name is ${this.firstName}`;
};
User.prototype.company = "Google";

//Make some objects with "User" prototype
let user1 = new User("Udit", "Kundu", 4);
// console.log(user1);
// console.log(user1.getCourseCount());

//Means if user has a property 'firstName' then only call it (It is use to save from undefined)
if (user1.hasOwnProperty("firstName")) {
  console.log(user1.getFirstName()); //Now we can acees newly added method in the protype
}

let user2 = new User("Jonny", "Stark", 3);
if (user2.hasOwnProperty("firstName")) {
  console.log(user2.getFirstName()); //Now we can acees newly added method in the protype
}
// console.log(user2);
// console.log(user2.company); //Google
