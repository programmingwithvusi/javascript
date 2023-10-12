// ARRAYS

// Arrow Functions

const numbers = [1, 2, 3, 4];
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

// predicate function
const course = courses.find(function (course) {
  return course.name === "a";
});

console.log(course);

// ES6
const course1 = courses.find((course) => course.name === "a");

console.log(course1);
