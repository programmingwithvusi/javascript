
//Primitive Types ===========
// String 
// Numbers
// Boolean
// Undefined
// null

let name ='Vusi'; // String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let firstName = undefined; // Undefined
let lastName = null; // null type
selectedColor = null; //'red'

// Static type
    // variables cannot be changed in the future
    //  string nmane ='Vusi'; //Vusi value can never be changed at runtime

// Dynamic type - Javascript is a dynamic language
    // variables can be changed in th future
    // let name = 'Vusi';

// Reference Types ==============
// Object Literal
// Array
// Function
 
let person = {
    // one or more ket value pairs
    // key: value
    name: "Vusi",
    age: 30

}
// Dot notation
person.name ='Dhlamini';

// Bracket Notation
person['name'] ="Dudu";

console.log(person.name);

// Array Literal ======================

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors[1]);
console.log(selectedColors[2]);

console.log(selectedColors.length);

// Functions
 // Parameter is name

 // Performing a task
function greet(name, lastName){
    console.log('Hello ' + name + ' '+ lastName);
}
// Argument is 'Vusi'
greet('Vusi', 'Dhlamini');
greet('Levious','7Dhlamini');


// Types of Function
// Calculation a value
function square(number) {
    return number * number;
}

console.log(square(2));
