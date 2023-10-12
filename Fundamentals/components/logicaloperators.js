// Logical Operator ===================================================
// Logical AND (&&)
// Returns TRUE if both operands are true

console.log( 'AND (&&)', true && true); // true
console.log( 'AND (&&)', true && false); // false


// Logical OR (||)
// Returns TRUE if both operands are true
console.log('OR (||) ', true || true); // true
console.log('OR (||) ', true || false); // true (return true if one operands is true)

let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore; // ||
console.log('Eligible ', eligibleForLoan);

// NOT (!)
let appplicationRefused = !eligibleForLoan;
console.log('Application Refused: ', appplicationRefused);

// Falsy  !(not a boolean (false))
// undefined
// null
// 0
// false
// ''
// NaN
// Anything that is not Falsy is --> Truthy
 // false || true  // returns true (Truthy)
 // false || 'Vusi' // retruns 'Vusi' (Truthy)
 // false || 1 // returns 1   (Truthy)
 // false || 1 || 2 // returns 1 (its called Short circutting)

 let userColor = undefined;
 let defaultColor = 'blue';
 let currentColor = userColor || defaultColor;
 console.log(currentColor);