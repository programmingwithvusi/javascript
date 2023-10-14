// Let vs Var
// Exanmple 1
// Let -> declared variable using the let keyword
function letStart() {
  for (let i = 0; i < 5; i++) console.log(i);
  // console.log(i); // 'i' is only accessable to for code block. 'i' is not defined outside code block
}
letStart();

// First problem with declaring variables with var keyword
// Example 2
// Var -> declared variable using the var keyword
function varStart() {
  for (var i = 0; i < 5; i++) console.log(i);
  console.log(i); // 'i' is accessable to fuction block instead of for loop code block.
}
// var keyword was used before ES6 => creates function-scope variables.
// ES6 (ES2015) : let, const were introduced to replace var keyword
// var => creates block-scope variables.
varStart();

// Example 3
// Var -> declared variable using the var keyword
function varStart() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
    if (true) {
      var color = "red"; // variables 'color' is accessable to function and not if() block.
    }
    console.log(color); // returns:  'red' five times.
    // this should return an error of variable not defiend.
  }
  console.log(i); // 'i' is accessable to fuction block instead of for loop code block.
}
// var keyword was used before ES6 => creates function-scope variables.
// ES6 (ES2015) : let, const were introduced to replace var keyword
// var => creates block-scope variables.
varStart();

// Second problem with declaring variables with var keyword
// Global variables.
var color = "dodgerblue"; // color -> attach itself to window object => window.color.
let age = "46"; // age does not attach itself to window object.

// sayHi() function is attached to the widown object => window.sayHi()
// refered to the module section on how to declare function outside window function.
function sayHi() {
  console.log("hi"); // returns: 'hi'
}
