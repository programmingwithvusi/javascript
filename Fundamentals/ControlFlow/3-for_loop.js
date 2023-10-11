// For loop =======================================================
// While Loop
// Do...While loop
// For...in loop
// For...of

// Poor way of executing the same statement multiple time
console.log("For loop");
console.log("-------------------");

console.log("\nPoor way of iteration");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");

// Good way
console.log("\nGood and preferred way of iteration");
for (let i = 0; i < 5; i++) console.log("Hello world", i);

// iteration using a variable
console.log("\niterate using a variable");
let message = "Hello World!";
for (let i = 0; i <= 5; i++) {
  console.log(message, i);
}

// Check number is an odd number
console.log("\nCheck number is an odd number");
for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Working the for loop backward
// Check odd number in the reverse order
console.log("\nCheck odd number in the reverse order");
for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
