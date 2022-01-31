//For Loop
// for(let i = 0; i <= 10 ; i ++){
//     console.log(i);
// }

let myArr = ["Delhi","Kolkata","Bangalore","Hydrabad","Kashmir"];

// for (let i = 0; i < myArr.length; i ++) {
//     console.log(myArr[i]);
// }

//While Loop

// let i = 0;
// while ( i < myArr.length) {
//     console.log(myArr[i]);
//     i ++;
// }


//Do while loop (it result = 1,2,3,4,5)
// but for normal while loop resul will be 1,2,3,4
// let i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);


//Break and continue
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     if (element === "Kolkata") continue  //Means it doesn't print Kolkata
//     if (element === "Hydrabad") break   //Means loop will be break when Hydrabad arrive
//     console.log(element);
// }

let fruits = ["Apple","Banana","Orange",15,"Pine Apple",12,];

//Let's print only the fruits from the array 

// TODO 
// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i];
//     if (typeof(element) === "number") continue
//     console.log(element);
// }

//Foreach , forof and forin loop

fruits.forEach(e => console.log(e));

for (const e of fruits){
    console.log(e);
}

let myObj = {
    name : "Udit",
    age : 18,
}
for (const e in myObj){
    console.log(`The value of ${e} is ${myObj[e]}`);
}


