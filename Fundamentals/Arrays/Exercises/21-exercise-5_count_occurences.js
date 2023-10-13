// ARRAYS

// Counting occurences.

const numbers = [1, 2, 3, 1, 1, 1, 4];

 const count = countOccurences(numbers, 1);

 console.log(count);

function countOccurences(array, searchElement) {
  /*
  let occured = 0;  
  /
  for(let item of array)
      if(item === searchElement)
         occured++;
  return occured;
*/
 return array.reduce((accumulator, current) => {
   const occured  = (current === searchElement) ? 1 : 0;
   //console.log(accumulator, current, searchElement);
    return accumulator + occured ;
  }, 0);

} 

