// Falsy  !(not a boolean (false))
// undefined
// null
// 0
// false
// ''
// NaN
// Anything that is not Falsy is --> Truthy

console.log(false || true); // returns true (Truthy)
console.log(false || "Vusi"); // retruns 'Vusi' (Truthy)
console.log(false || 1); // returns 1 (Truthy)
console.log(false || 1 || 2); // returns 1 (its called Short circutting)

let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log(currentColor); // -> {output: red}

let anotherUserColor = undefined;
let anotherDefaultColor = "blue";
let anotherCurrentColor = anotherUserColor || anotherDefaultColor;
console.log(anotherCurrentColor); // -> {output: blue}
