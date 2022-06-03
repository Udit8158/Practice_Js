// Promise is a substitute of callback func
// Let's do prev example with promise...

// Create a senario where student's data comes from server...

const students = [
  {
    name: "Udit",
    subject: "CS",
  },
  {
    name: "Harry",
    subject: "Python",
  },
];

const fetchStudents = () => {
  setTimeout(() => {
    students.forEach((student) => {
      console.log(student.name);
    });
  }, 1000);
};

let newStudent = { name: "Hitesh", subject: "Web Dev" };

const enrollStudent = (studentDetails) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof studentDetails == "object") {
        students.push(studentDetails);
        console.log("Enroll student successfully");
        resolve();
      } else {
        console.log(
          `Can't enroll, please give a object in input of student details...`
        );
        reject();
      }
    }, 2000);
  });
};

// Actually this part can be substituated by asyn await

// enrollStudent(newStudent)
//   .then(() => {
//     fetchStudents();
//   })
//   .catch(() => {
//     console.log("Error occured");
//   });

// Almost same use case like callback function

// Make async await version of promise................. (But it work for only those function which return promise) and also you need to declare and call an extra function for this...

const printAsync = async () => {
  await enrollStudent(newStudent);
  fetchStudents();
};

printAsync();
