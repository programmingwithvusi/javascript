// Reference Types ==============
// Object
// Array
// Function

// Object Literal
let person = {
  // one or more ket value pairs
  // key: value
  name: "Vusi",
  age: 30,
};

// Dot notation = Prefered way of object usage.
person.name = "Dhlamini"; // references a memory person name object
console.log(person.name);

// Bracket Notation
let selection = "name";
person[selection] = "Dudu"; // references a memory person name object
console.log(person.name);

console.log(person);
