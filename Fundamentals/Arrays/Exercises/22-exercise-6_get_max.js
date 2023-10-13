// ARRAYS

// Get max number (reduce()).
// anytime you want to return array of values. and you want to get a single value
// as a result of iterating that array you use a reduce method.
const numbers = [1, 2, 56];

 const max = getMax(numbers);

 console.log(max);

function getMax(array) {
  if(array.length === 0) return console.error(undefined);
  /*
  let max = array[0];
  
  // Example 1
  for(let i = 1; i < array.length; i++)
     if(array[i] > max)
      max =  array[i];
  return max;

  // Example 2
  return array.reduce((accumulator, current)=> {
    if(current > accumulator) return current;
    return accumulator;
  });
*/
 // Example 3
 return array.reduce((a, b) => (a > b) ? a  : b);

}