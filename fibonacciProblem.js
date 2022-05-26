// Fibonacci problem

const fibGen = (n) => {
  let resultArr = [];
  if (n === 0) {
    return "Atleast give one output.";
  } else if (n === 1) {
    resultArr = [0];
  } else if (n === 2) {
    resultArr = [0, 1];
  } else {
    resultArr = [0, 1];
    let presentVal = 1;
    let prevVal = 0;
    let mainVal;
    while (resultArr.length < n) {
      mainVal = presentVal + prevVal;
      resultArr.push(mainVal);
      prevVal = presentVal;
      presentVal = mainVal;
    }
  }
  return resultArr;
};

console.log(fibGen(100));
