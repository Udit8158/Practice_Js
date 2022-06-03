// For default's export use outside {} and for normal exprot-import use inside {}
import User, { userName, userAge } from "./modules/user.js";

const usr1 = new User("Udit", 18);
console.log(usr1);
