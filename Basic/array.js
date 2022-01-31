let myArr = [4, 2, "A", "B", "C"];
myArr = new Array(1, 2, "A", "B", "C");
// console.log(myArr,typeof(myArr));
// myArr.splice(1,3); //Means remove 1,2,3 indexes from the array
// console.log(myArr,myArr.length);
// console.log(myArr.indexOf(9));
// console.log(myArr.includes(9));
let cheeckArrItem = (arr,item) => {
  if (arr.includes(item)){
    console.log(`${item} is present in givven array`);
  } else {
    console.log(`${item} is not present in givven array`);
  }
}

// cheeckArrItem(myArr,2)
// console.log(myArr);
// myArr.splice(0,3);
// console.log(myArr);

//Coppy an array 
// let newArr = [0,"new",...myArr];
let newArr = new Array(0,"new",...myArr);
// console.log(newArr.toString());

// console.log(Array.from('Udit'));

let Arr = Array.from([1,2,3],(x)=>{
  return x+1
})

Arr = Array(6);
Arr = Array.from([6]);
Arr = Array.of(6)
// console.log(Arr);
// console.log(Arr.length);

newArr.splice(1,1);
newArr.splice(3,3);

newArr = Array(2,4,6)
// console.log(newArr);
 
// let result = newArr.every((e) => {
//   return e%2 === 0 ;
// })
let result = newArr.every((e) => ( e%2 === 0 ));  //Single line call back func

//This .every func always return only true or false keyword.
// console.log(result);

let anotherArr = Array(1,2,3,4,5,6);
// anotherArr.fill(0); //It fills all value of arr with 0
// anotherArr.fill(0,2,5);  //It fill 2,3,4 idexes with 0
let newFilteredArr = anotherArr.filter((e) => (e > 2));  //It filter array with greater than 2 values
newFilteredArr = anotherArr.filter(e => e%2 === 0); //It print only the even numbers
// console.log(anotherArr);
// console.log(newFilteredArr);


//slice and splice method

let fruits = ["apple","orange","banana","pine apple"];
console.log(fruits);

// console.log(fruits.slice(1,3));  //In this case original array will not changed

// fruits.splice(1,3);  //It remove 3 items from 1 index including 1th index element
fruits.splice(1,3,"New Value 1","New Value 2")  //It remove 3 items from 1 index including 1th index element and add These 2 new values
console.log(fruits);  //Splice method modify the real array where as slice method not modify the real array.

