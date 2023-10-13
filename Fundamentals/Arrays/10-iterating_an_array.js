// ARRAYS

// Iterating an Array.

let numbers = [1, 2, 3];

console.log('Using the forof loop to iterate an array:')
for (let number of numbers)
  console.log(number); // returns: 1, 2, 3, 4

  // another way usinf forEach loop
  console.log('\nUsing the forEach loop to iterate an array:')
  numbers.forEach(function(number) {
    console.log(number); // returns: 1, 2, 3, 4
  }); 
  
  // Using Arrow Function
  console.log('\nUsing the Arrow Function loop to iterate an array:')
  numbers.forEach(number => console.log(number)); // returns: 1, 2, 3 

  // We can pass second parameter Index
  console.log('\nUsing the Arrow Function loop to iterate an array:')
  numbers.forEach((number, index) => console.log(index, number));// 0/1, 1/2, 2/3 
