// Switch and Case =============================================
// switch (condition){
// case 'validation'
// statement(s);
// break
// default:
// statement(s);
//}
console.log("switch..case loop");
console.log("-------------------");

let role = "presenter"; // moderator / guest / presenter';

// Switch...case statement
console.log("\nSwitch..case statement");
switch (role) {
  case "guest":
    console.log("Guest User");
    break;
  case "moderator":
    console.log("Moderator User");
    break;
  case "presenter":
    console.log("Presenter User");
    break;
  default:
    console.log("Unknown User");
}

// If...else statement
console.log("\nif..else statement");
if (role === "guest") console.log("Guest User");
else if (role === "moderator") console.log("Moderator User");
else if (role === "presenter") console.log("Presenter User");
else console.log("Unknown User");

// Tenary statement
console.log("\nTenary expression");
let permission =
  role == "guest"
    ? "Guest User"
    : role === "moderator"
    ? "Moderator User"
    : role === "presenter"
    ? "Presenter User"
    : "Unknown User";

console.log(permission);
