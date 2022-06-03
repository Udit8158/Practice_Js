const students = [
  { name: "Udit", age: 18 },
  { name: "Rohan", age: 17 },
];

const fetchStudentNames = () => {
  setTimeout(() => {
    students.forEach((student) => {
      console.log(student.name);
    });
  }, 2000);
};

const fetchStudentAges = () => {
  setTimeout(() => {
    students.forEach((student) => {
      console.log(student.age);
    });
  }, 2000);
};
const newStudent = { name: "Harry", age: 22 };

const enrollStudent = (newStudentDetail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof newStudentDetail === "object") {
        // Main logic
        students.push(newStudentDetail);
        resolve("Successfully added new student " + newStudentDetail.name); // resolve msg
      } else {
        reject("Please add student object in parametere."); // reject msg
      }
    }, 5000);
  });
};

// enrollStudent(newStudent)
//   .then((msg) => {
//     console.log(msg);
//     fetchStudentNames();
//   })
//   .then((msg) => {
//     fetchStudentAges();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Async - Await version of promise

// If you think to do make this type of simple function for await then it not work. You need to return promise to work with async await because async await is used to simplify promise .then() statements

// const enrollStudent = (newStudentDetail) => {
//   setTimeout(() => {
//     // Main logic
//     students.push(newStudentDetail);
//   }, 5000);
// };

async function printAsync() {
  try {
    await enrollStudent(newStudent);
    fetchStudentNames();
    fetchStudentAges();
  } catch (error) {
    console.log(error);
  }
}

printAsync();
