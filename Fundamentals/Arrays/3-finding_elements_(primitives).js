// ARRAYS
// Finding Elementa (Primitive)
const numbers = [1, 2, 3, 1, 4];
// index of
console.log(numbers.indexOf(3)); // returns: 2

// fromIndex
console.log(numbers.indexOf(1, 2)); // returns: 3

console.log(numbers.indexOf("b")); // returns: -1

console.log(numbers.indexOf("1")); // returns: -1

// last index of
console.log(numbers.lastIndexOf(1)); // returns: 3 as last index of 1

// to see if a given index exists we use
console.log(numbers.indexOf(1) !== -1); // returns: true

// new method in javascript for achieving the same thing
//includes() method
console.log(numbers.includes(1)); // returns: true.
