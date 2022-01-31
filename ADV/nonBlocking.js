// In general js not block anything

const one = () => {
  console.log("I am One");
};
const two = () => {
  // Js is not blocked by this code for 1s
  setTimeout(() => {
    console.log("OOoHooo");
  }, 1000);
  console.log("I am Two");
};
const three = () => {
  console.log("I am Three");
};

one();
two();
three();
