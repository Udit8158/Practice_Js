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
// V1 of the code (Without callback)

// const enrollStudent = (studentDetails) => {
//   setTimeout(() => {
//     // console.log(typeof studentDetails);
//     if (typeof studentDetails == "object") {
//       students.push(studentDetails);
//       console.log("Enroll student successfully");
//     } else {
//       console.log(
//         `Can't enroll, please give a object in input of student details...`
//       );
//     }
//
//   }, 2000);
// };

const fetchStudents = () => {
  setTimeout(() => {
    students.forEach((student) => {
      console.log(student.name);
    });
  }, 1000);
};

let newStudent = { name: "Hitesh", subject: "Web Dev" };
// Without call back

// enrollStudent(newStudent);
// fetchStudents();

// Here the problem is fetching is quick so new student is not print in console

/////////// //////////////
// V2 of the code (with call back)
//Just change in enroll sutdent

const enrollStudent = (studentDetails, callBackFunc) => {
  setTimeout(() => {
    // console.log(typeof studentDetails);
    if (typeof studentDetails == "object") {
      students.push(studentDetails);
      console.log("Enroll student successfully");
    } else {
      console.log(
        `Can't enroll, please give a object in input of student details...`
      );
    }
    callBackFunc();
  }, 2000);
};

enrollStudent(newStudent, fetchStudents); // Now run fetchStudents func as callback means after completing enroll student  feching is done...
