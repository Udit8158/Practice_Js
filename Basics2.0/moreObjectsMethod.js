const udit = {
  firstName: "Udit",
  lastName: "Kundu",
  age: 18,
  getInfo: function () {
    return `First Name : ${this.firstName} \nLast Name : ${this.lastName} \nAge : ${this.age}`;
  },
};

const hitesh = {
  firstName: "Hitesh",
  lastName: "Choudhury",
  age: 25,
};

let getInfoHitesh = udit.getInfo.bind(hitesh); //Create a getInfoHitesh func which is actually udit.getInfo where "this" keyword refers to hitesh obj
console.log(getInfoHitesh());
hitesh.getInfo = getInfoHitesh; //Set the getInfo inside hitesh
console.log(hitesh.getInfo());
console.log(udit.getInfo()); //It doesn't change
// console.log(hitesh.getInfo());
