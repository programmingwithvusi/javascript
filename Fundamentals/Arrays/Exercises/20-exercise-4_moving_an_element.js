// ARRAYS

// Moving and element.

const numbers = [1, 2, 3, 4];

 move(numbers, 1, 3);


function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
      console.error('Invalid offset!');
      return;
  }
  const newArray = [...array];
  const item = newArray.splice(index, 1)[0];
  newArray.splice(index + offset, 0, item);
  return console.log(newArray);
} 

