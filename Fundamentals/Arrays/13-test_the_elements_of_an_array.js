// ARRAYS

// Testing the elements of the Array

let numbers = [-1, 5, 20, 35, 2, 3, 1];

// 2 new method in javascript
// every() -> check for positive numbers
// some() -> check at one posivite number

// every()
const positive = numbers.every(function(value) {
  return value >= 0;
}); //
console.log(positive); // returns: true

// some()
const onePositive = numbers.some(value => {
  return value > 0;
}); //
console.log(onePositive); // returns: true
