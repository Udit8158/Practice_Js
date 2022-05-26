// for loop
const places = new Array("Delhi", "Kolkata", "Bangalore", "Mumbai");

for (let index = 0; index < places.length; index++) {
  const element = places[index];
  //   console.log(index, element);
}

places.forEach((element, index) => {
  //   console.log(index, element);
});

const uditIdentity = {
  name: "Udit",
  age: 18,
  role: "SDE 3",
  company: "Microsoft",
  salary: "83 LPA",
  office: "Bangalore",
};

// console.log(uditIdentity);

for (const key in uditIdentity) {
  const value = uditIdentity[key];
  //   console.log(`${key} of the employee is ${value}`);
}

for (const iterator of Object.values(uditIdentity)) {
  // console.log(iterator);
}

// Break and continue (It only works on for loop.)
for (let index = 0; index < places.length; index++) {
  const element = places[index];
  if (element === "Kolkata") continue;
  // if (element === "Bangalore") break;
  console.log(element);
}
