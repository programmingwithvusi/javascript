// Local vs Global Scope

// Global Scope

// variable color is defined as global, accessable to all the funcetions,
// defined everywhere.
const color = "red";

// Local Scope.
// Example 1
{
  // when we declare variables with let or const their scope,
  // is limted to the block which their are defined
  const message = "hi";
}

/// console.log(message); // Uncaught ReferenceError: 'message' is not defined.

// Example 2
// message is only accessable to the code block in which it's defined in start() block.
function start() {
  const message = "start";
}
//console.log(start()); // Uncaught ReferenceError: 'message' is not defined.

function stop() {
  const message = "start";
}
// console.log(stop()); // Uncaught ReferenceError: 'message' is not defined.

// Example 2
// same  if statement variables declared in thet block,
// is only accessable to the if() code block in which it's defined If()
function startIf() {
  const message = "start";
  if (true) {
    const another = "bye";
  }
  console.log(another); // Uncaught ReferenceError: 'another' is not defined.
}

// startIf();

// Example 2
// same  if statement variables declared in thet block,
// is only accessable to the if() code block in which it's defined If()
function startFor() {
  const message = "start";
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); // Uncaught ReferenceError: 'i' is not defined.
}
// startFor();

// Global Scope
// We should avoid defining global constance or variables.
// its considered bad practise in javascripts.
// message is only accessable to the code block in which it's defined in start() block.
function globalStart() {
  const message = "start";
  const color = "blue"; // local declared variables takes precedence over global variables. avoid global variables in javascript.
  console.log(color);
}
globalStart();
