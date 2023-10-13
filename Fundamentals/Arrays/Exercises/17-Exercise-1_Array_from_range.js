// ARRAYS

// Array from Range

const numbers = arrayFromRange(1, 4);

console.log(numbers);

function arrayFromRange(min, max) {
  let range = [];
  for(let i = min; i <= max; i++)
    range.push(i);
  
  return range;
}


