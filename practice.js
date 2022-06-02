let obj = {
  name: "Udit",
  sayHi: function () {
    return this.name;
  },
};

console.log(obj.sayHi());
