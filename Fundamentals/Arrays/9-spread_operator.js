// ARRAYS

// Spread Operator.

let first = [1, 2, 3];
let second = [4, 5, 6];
let third = [7, 8, 9];

// const combined = first.concat(second);
  const combined = [...first, 'a', ...second, 'b']

 // const copy = combined.slice(); // copy of the combined array (first and second)
const copy = [...combined]; 
console.log(copy); //  [1, 2, 3, 'a', 4, 5, 6, 'b']