let myMap = new Map();

//Setting the key and values of map
myMap.set("name", "Udit");
myMap.set("age", 18);
myMap.set("profession", "student");
myMap.set("language", "Js");

console.log(myMap);
console.log(myMap.get("age")); //Getting the value of the age
console.log(myMap.has("name")); //Return 'true' as it has name key
// console.log(myMap.entries());

for (const [key, val] of myMap) {
  console.log(`${key} = ${val}`);
}

// Here 1st one is value and second one is key
myMap.forEach((val, key) => {
  console.log(`${key} = ${val}`);
});
