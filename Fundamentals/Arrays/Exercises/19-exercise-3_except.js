// ARRAYS

// Except.

const numbers = [1, 2, 3, 4];

const output = except(numbers, [1, 2])

console.log(output);

function except(array, excluded) {
  const exclude = [];
  for(let item of array)
    if(!excluded.includes(item))
        exclude.push(item);
  return exclude;
} 

