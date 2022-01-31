const one = () => {
  return "I am One";
};
const two = () => {
  // setTimeout(() => "I am Two", 1000); // Then says undefined
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("I am Two"), 5000);
  });
};
const three = () => {
  return "I am Three";
};

const callAll = async () => {
  let valOne = one();
  console.log(valOne);
  let valTwo = await two();
  console.log(valTwo);
  let valThree = three();
  console.log(valThree);
};

callAll();
