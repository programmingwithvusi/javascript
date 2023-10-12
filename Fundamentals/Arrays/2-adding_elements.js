// ARRAYS
const numbers = [3, 4];

// End -> insert elements at the END of an array object
numbers.push(5, 6);

// Beggining -> insert elements at the beggining of a array object
numbers.unshift(1, 2);

// Middle -> insert elements at the middle of a array object
numbers.splice(2, 0, "a", "b"); // start index is 2, No of elements to delete is 0, items to add

console.log(numbers);
