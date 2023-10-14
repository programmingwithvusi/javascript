// FUNCTIONS

// Hoisting

// Function Declaration

walk(); // In javascript we can call a function declaration before it's declared
// We call that process hoisting
function walk(){
    console.log('walk');
}

// Function Expression
// Anonymous Function Expression

// However with function expression we cannot call this function before declaration.
// reason being this is a variale declaration, you must first declare a varible before its use. 

try {  
  // example
  run(); // ReferenceError: Cannot access 'run' before initialization
} catch (e) {
  console.log(e.message);
} 

let run = function() {
console.log('run');
}

run(); // returns: run

// example 2
// console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 1; ///

