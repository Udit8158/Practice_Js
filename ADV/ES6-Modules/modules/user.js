// Default export only can one.

export default class User {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}

export const userName = (usr) => usr.name;
export const userAge = (usr) => usr.age;

// Also can do this...

// export default User;
// export { userName, userAge };
