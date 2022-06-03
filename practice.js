const students = ["Udit", "Harry"];

const fetchStudents = () => {
  students.forEach((student) => {
    console.log(student);
  });
};

const enrollStudent = (newStudentDetail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let err = false;
      if (!err) {
        resolve("Enroll success");
        students.push(newStudentDetail);
      } else {
        reject("Sorry not enroll.");
      }
    }, 2000);
  });
};

const newStudent = "Hitesh";

// enrollStudent(newStudent)
//   .then((msg) => {
//     console.log(msg);

//     fetchStudents();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const print = async () => {
  await enrollStudent(newStudent);
  fetchStudents();
};
// print();

// Spread and rest operator
//TODO: Spread : it use when you want to pass array or other params as arg on the time of calling a func.

const sumTwoNumber = (a, b) => a + b;

const sumResult = sumTwoNumber(...[3, 4]);
// console.log(sumResult);

// Rest : it allows a function to take infinite number of args when creation (Actually it creates an array of multiple args.So we ne)

const multTwoSumOthers = (a, b, ...args) => {
  let sum = 0;
  let mult = a * b;
  args.forEach((arg) => {
    sum += arg;
  });
  return [mult, sum];
};

const multFuncResult = multTwoSumOthers(2, 3, 3, 3);
// console.log(multFuncResult);
