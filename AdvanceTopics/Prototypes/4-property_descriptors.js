// Property Descriptors
// Property Attibutes

let person = { name: "Vusi" };
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor);

Object.defineProperty(person, "name", {
  writable: true,
  enumerable: true,
  configurable: true
});

person.name = "Dudu";
// delete person.name;
console.log(Object.keys(person)); // enumeriable returns: [] if false, ['name'] if true

console.log(person); // writable returns: 'Vusi' if false, 'Dudu' if true

console.log(person); // configurable returns: 'Dudi' if false, '[]' if true
