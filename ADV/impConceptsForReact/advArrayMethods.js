//Advance Array Methods //

const items = [
  { name: "Book", price: 200 },
  { name: "iPhone", price: 400 },
  { name: "Mac Book", price: 800 },
  { name: "Watch", price: 100 },
  { name: "Mouse", price: 50 },
  { name: "Key Board", price: 75 },
];

console.log(items);

//1. Filter method (It creates a new arr, it doesn't  modify the present arr.)

const cheapItems = items.filter((item) => item.price <= 200); // It returns an array with givven condition.
console.log(cheapItems);

//2. Fill method : It actually modify the present array

// items.fill(0, 2, 5); // Means fll with 0 start from 2nd index and end on not including 4th index.
// console.log(items);

//3. Map method : it also creates a new array without changing the present and it actually used to perform a certain task on the element of an array.

const itemNames = items.map((item) => item.name); // Makes an array with the name of the items
const itemPrice = items.map((item) => item.price); // Makes an array with the price of the items

console.log(itemNames);
console.log(itemPrice);

//4. Find method : almost like filter but here you can only get one item not an array on the element.

const findMacBook = items.find((item) => item.name === "Mac Book");
console.log(findMacBook);

//5. some and every method

// const result = items.some((item) => item.price <= 50); // true (if one or more element satisfy then true)
const result = items.every((item) => item.price <= 50); // false (need to satisfy all elements for true)
console.log(result);

//6. includes method

const includeMac = itemNames.includes("Mac Book"); // Like this
console.log(includeMac);

//7. Reduce method : use for sum total of a array's item's price.

const initialVal = 0;
const totalPrice = items.reduce(
  (prevVal, item) => prevVal + item.price,
  initialVal
);
// same
const totalMethod2 = itemPrice.reduce(
  (prevVal, currentPrice) => prevVal + currentPrice,
  initialVal
);
console.log(totalPrice, totalMethod2);
