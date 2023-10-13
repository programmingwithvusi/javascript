// ARRAYS

// Joining an Array.

let numbers = [1, 2, 3];

const joined = numbers.join(', ') // passing a string as a seperator 
console.log(joined);

// useful method that goes hand-in-hand with join() method is the split() method 
// slpit is part of String method and arrays.

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts); // returns: ['This', 'is', 'my', 'first', 'message']

const combined = parts.join('-');
console.log(combined); // returns: This-is-my-first-message
