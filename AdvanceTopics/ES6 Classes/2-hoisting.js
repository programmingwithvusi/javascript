// Hoisting
// Is a process of raising a function(s) at the top of the code,
// whether they are called first or not.

// In JavaScript there are two ways we can declare fucntions

// Fuction declaration

// no need for semicolon termination in the end srtatement.
// Fuction declaration are hoisted, which means they re raised the top of the code at runtime.
// I can call a fucntion sayHello() before it's declaration
// like this:
sayHello(); // this is perfectly fine.
function sayHello() {}

// Fiunction expression, we always terminate the statement declaration with  semicolon.
// these type of function are declared as variable function
// ussualy with a const, let, var keyword.
// with expression cannot call a function expression before declaration
// like this:
// declaration always comes first before the call.

// sayGoodbye(); // returns: Cannot access 'sayGoodbye' before initialization
const sayGoodbye = function () {};

// Classes are not capable of Hoisting
// Class declaration (PREFERED)
class Circle {}

// Class expression
// since clases are function, they follow the same syntax.
// const, let, var keyword can be used to declare a class then terminated by semicoln.
const Square = class {};
