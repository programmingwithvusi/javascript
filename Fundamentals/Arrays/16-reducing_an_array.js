// ARRAYS

// Reducing an Array

// basic way summing array items.
let numbers = [-1, 5, 20, 35, 2, 3, 1 ];

function calculateSum(array) {
let sum = 0;

for(let n of array)
  sum += n;
console.log(sum);
}
calculateSum(numbers);
// cleaner ans more eligant way using a reduce()
// accumulator -> paramater is the same asthe sum variable, returns the total sum.
// currentValue -> is the number of numbers in an array to be added to the accumulator/sum variable.

// 1. a = 0, c = -1 => -1
// 2. a = -1 c = 5 => a = 4
// 3. a = 4 c = 20 => a = 24
// 4. a = 24, c = 35 => a = 59
// 5. a = 59, c = 2 => a = 61 
// 6. a = 61, c = 3 => a = 64 
// 7. a = 64, c = 1 => a = 65 
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // set the accumulator to zero.

// cleaner and shoerter way
const another = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum, '\t', another);
console.log(numbers.length);