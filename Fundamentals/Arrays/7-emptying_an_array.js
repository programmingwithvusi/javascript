// ARRAYS

// Removing elements

let numbers = [1, 2, 3, 4];
let another = numbers;
// Solution 1
// only works if you do not have any reference to the array/object.
//numbers = []; // assignment to a constant

//console.log(another);
//console.log(numbers);

// Solution 2
//numbers.legnth = 0; (PREFERED WAY)

// Solution 3
//numbers.splice(0, numbers.length);

// Solution 4
// for (let i = numbers.length; i > 0; i--) numbers.pop(i);
// while (numbers.length > 0) numbers.pop();

do numbers.pop();
while (numbers.length);

console.log(another);
console.log(numbers);
