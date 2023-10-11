// Enumerating property of an object

// Basic Function
const circle = {
  radius: 1,
  draw() {
    console.log("Draw");
  },
};

// Constructor Function
function Circle(radius) {
  (this.radius = radius),
    (this.draw = function () {
      console.log("draw");
    });
}

// using a forin loop
for (let key in circle) {
  console.log(key, circle[key]);
}

// using a forof loop can only be used with iterables. such as Arrays and maps.
// An object is noe iterable using a forof loop.

/*
// [output: Error: circle is not iterable]
for (let key of circle) {
  console.log(key, circle[key]); 
}
*/
// However we an use:
// Object.keys
for (let key of Object.keys(circle)) {
  console.log(key); // [output: radius, draw]
}

for (let entry of Object.entries(circle)) {
  console.log(entry); // [output: radius, draw]
}

// If a given specific property or method exists in an object
if ("radius" in circle) console.log("Yes circle has a radius.");

// ========================================================

//Additional function/object to access methods and propertieds.
const circle2 = new Circle(10);

// using a forin loop
for (let key in circle2) {
  // return only properties and not methods.
  if (typeof circle2[key] !== "function") console.log(key, circle2[key]);
}

// Another approach to get all the keys in an object
const keys = Object.keys(circle2);
console.log(keys);

const entry = Object.entries(circle2);
console.log(entry);
