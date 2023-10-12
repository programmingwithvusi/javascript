// ARRAYS

// Removing elements

const numbers = [1, 2, 3, 4];

// End
const last = numbers.pop(); // removes the last elements in arrays
console.log(last);
//Beggining
const first = numbers.shift(); // removes the first elements in arrays
console.log(first);

// Middle
// we pass th index and number of elements we want to remove
const middle = numbers.splice(1, 2); // removes the middle elements in arrays

console.log(middle);

console.log(numbers);
