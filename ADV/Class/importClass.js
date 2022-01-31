const User = require("./class.js");
const proUser = require("./class.js");
// import { User, porUser } from "./class.js";

const udit = new User("Udit", 0, 18);

// console.log(udit.courses); // undefined (as 'courses' is private porp)
udit.buyCourse("React Js Course", "Node Js Course", "Python Course");
udit.buyCourse("Angular Course", "C++ Course");
console.log(udit.showCourses());

const hitesh = new proUser("Hitesh", 0, 28);
console.log(hitesh.courseCount);
console.log(hitesh.showCourses());
// console.log(hitesh.role());
