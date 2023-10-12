// ARRAYS

// Finding elements of Reference type

const numbers = [1, 2, 3, 4];
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

// Object passed to the includes({id: 1, name: 'b'}) method,
// is different from th object contained in the courses object
console.log(courses.includes({ id: 1, name: "a" })); // returns: false

// if you have an array of reference/object type
// Use the find() method
let output = courses.find(function (course) {
  return course.name === "a";
});
console.log(output); // returns: // {id: 1, name: 'a'}

let output1 = courses.find(function (course) {
  return course.name === "xyz";
});

console.log(output1); // returns: undefined

// findIndex
let output2 = courses.findIndex(function (course) {
  return course.name === "a";
});

console.log(output2); // returns: -1
