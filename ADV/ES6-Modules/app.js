import { User, default as d } from "./modules/user.js";
import * as acc from "./modules/account.js";

const usr1 = new User("Udit", 18, "20 LPA", "Developer");
console.log(usr1.deposit(12490));
console.log(d());
console.log(acc.sayHi());
