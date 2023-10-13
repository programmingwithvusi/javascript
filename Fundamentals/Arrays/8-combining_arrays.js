// ARRAYS

// Combining Array.

let first = [1, 2, 3];
let obj = [{id: 1}];

let second = [4, 5, 6];
let third = [7, 8, 9];

const combined = first.concat(second); // returns: a new array for both first and second
const slice = combined.slice(2, 4); // start index 3, 4 end element item.   

console.log(combined); 
console.log(slice);


const slice1 = combined.slice(2); // start index 2, show all element items.   
console.log(slice1);

// adding object to an array 
const combined1 = obj.concat(first); // returns: a new array for both first and second
obj[0].id = 10;

console.log(combined1); 
// console.log(slice);