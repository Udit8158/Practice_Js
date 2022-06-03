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
print();
