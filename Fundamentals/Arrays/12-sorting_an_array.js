// ARRAYS

// Sorting an Array.

let numbers = [5, 20, 35, 2, 3, 1];
console.log(numbers); // returns: [5, 20, 35, 2, 3, 1]

numbers.sort();
console.log(numbers); // returns: [1, 2, 20, 3, 35, 5]

numbers.reverse();
console.log(numbers); // returns: [5, 35, 3, 20, 2, 1]

// sorting when working with objects
const courses =[
  {id: 1, name: 'node.js'},
  {id: 2, name: 'javaScript'},
];
courses.sort(function(a,b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if(nameA < nameB) return -1;
  if(nameA > nameB) return 1;
  return 0;
});
console.log(courses);

// Using the Arrow Fuction and Tenary operators
courses.sort((a,b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  return (nameA < nameB) 
  ? -1 : (nameA > nameB) ? 1 : 0;
});
console.log(courses);


