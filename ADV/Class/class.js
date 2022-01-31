class User {
  constructor(name, courseCount, age) {
    this.name = name;
    this.courseCount = courseCount;
    this.age = age;
  }
  #courses = []; // Private prop
  // Work as getter
  showCourses() {
    if (this.#courses.length !== 0) {
      return `Hey,${this.name};You have enrolled in ${this.#courses}`;
    } else {
      return `Hey,${this.name};You have enrolled in 0 courses`;
    }
  }
  // Work as setter
  buyCourse(...courseNames) {
    // Use Rest Op on above
    this.#courses.push(...courseNames); // Use spred Op
  }
}

// Inheriate a new class

class proUser extends User {
  constructor(name, courseCount, age) {
    super(name, courseCount, age);
  }
  role() {
    return `${this.name} is a pro user.`;
  }
}
module.exports = User;
// export { User, proUser };

const newPro = new proUser("Harry", 0, 25);
console.log(newPro.role());
