// Make a class
class User {
  constructor(name, age, salary, role) {
    (this.name = name),
      (this.age = age),
      (this.salary = salary),
      (this.role = role);
  }
  deposit(depositAmount) {
    return `${this.name} deposit ${depositAmount} money.`;
  }
}
// Exporting default function
export default () => {
  return "This is default export.";
};
const name = "Hitesh";

export { User };
