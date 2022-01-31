let user = {
    firstName : "Udit",
    lastName : "Kundu",
    numberOfLogin : 24,
    isVerified : true,
    courseList : [],
    buyCourse : function(courseName){
        // this.courseList.push(name);
        if (this.courseList.includes(courseName)){
            console.log("You already bought this course.");
        } else{
            this.courseList.push(courseName);
            console.log(`You just bought ${courseName} successfully.`);
        }
    },
    getCourseCount : function(){
        if (this.courseList.length == 1 ) {
            return `${this.firstName} bought ${this.courseList.length} course till now`;
            
        } else if (this.courseList.length == 0){
            return `${this.firstName} bought ${this.courseList.length} course till now`;

        } else {
            return `${this.firstName} bought ${this.courseList.length} courses till now`;
        } 
    },
    removeCourse : function (courseName) {
        if (this.courseList.includes(courseName)) {
            let indexOfCourse = this.courseList.indexOf(courseName);
            this.courseList.splice(indexOfCourse,1);
            return `${courseName} is succesfully removed from your course list.`;
        } else {
            return `${courseName} is not present in your course list.`;
        }
    }
}
// user.firstName = "Jit";   //Changing the value of the key
// console.table(user);
console.log(user.courseList);
user.buyCourse("React JS Course");
console.log(user.courseList);
// user.buyCourse("React JS Course");
// user.buyCourse("JavaScript Course")
// user.buyCourse("Python Course")
// console.log(user.courseList);
// console.log(user.getCourseCount());
// console.log(user.removeCourse("Python Course"));
// console.log(user.getCourseCount());
console.log(Object.keys(user));    // It gives all keys in terms of array
console.log(Object.values(user));  //It gives all values in terms of array
console.log(Object);


