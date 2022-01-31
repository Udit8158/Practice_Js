// ****************For Regular Function Calls, 'this' Points to Window Object*********************//

console.log("line 3: ",this);

let user = {
    firstName : "Udit",
    courseCount : 23,
    getCourseCount : function (){
        console.log(`${this.firstName} has ${this.courseCount} courses`);
        console.log("line 10:",this);
        function sayHello() {
            console.log("Hello",this.user.firstName);
            console.log("line 13 :", this);   //Here it work as regular function so 'this' indicates as window/global object
        }
        sayHello()
    }
    
}

user.getCourseCount()
