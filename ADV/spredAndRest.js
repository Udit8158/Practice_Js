// console.log(Math.max(1, 2, 3, 43, 12, 22)); // It can take as many as poosible args
// console.log(Math.max([12, 2, 1])); // But can't take array as an arg

let myObj = {};
Object.assign(myObj, { a: 1, b: 2 }, { x: 3, y: 4 }); // It keep first arg seperate and apply a same rule to the others args
// console.log(myObj);

// Function to sum

const sumOne = (a, b) => {
  return a + b;
};
// console.log(sumOne(3, 5)); // 8

// These are two problems with these function
// console.log(sumOne([3, 5])); // 3,5undefined  (problem - 1)
// console.log(sumOne(3, 5, 2)); // 8 (It ignores the args after two args) (problem - 2)

// solve problem 1
console.log(sumOne(...[3, 5])); // 8 ( TODO: SPRED OPERATOR)

// solve problem 2

// TODO: REST OPERATOR
const sumTwo = (...args) => {
  let sum = 0;
  args.forEach((arg) => (sum += arg));
  return sum;
};
console.log(sumTwo(3, 4, 5, 10, 8, 9)); // Now it can take as many number as givven

// Function which mults first two and sum others arguments
const multTwoSumOthers = (a, b, ...args) => {
  multTwo = a * b;
  let sum = 0;
  args.forEach((arg) => (sum += arg));
  return [multTwo, sum];
};

console.log(multTwoSumOthers(1, 2, 3, 4, 5)); // [2,12]
