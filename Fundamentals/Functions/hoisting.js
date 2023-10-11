// HOISTING

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

 
run(); // ReferenceError: Cannot access 'run' before initialization
// example

console.log(x); // ReferenceError: Cannot access 'run' before initialization
let x = 1;

let run = function() {
    console.log('run');
}
run();


