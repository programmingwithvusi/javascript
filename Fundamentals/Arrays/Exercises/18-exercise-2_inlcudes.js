// ARRAYS

// Includes method.


const numbers = [1, 2, 3, 4];

const output = includes(numbers, 4)

console.log(output);

function includes(array, searchElement) {  
  for(let item of array) 
    if(item === searchElement)
      return true;
  return false;
  }

