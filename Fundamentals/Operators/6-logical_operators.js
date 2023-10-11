// Logical Operator ===================================================
// Logical AND (&&)
// Returns TRUE if both operands are true

console.log("AND (&&)", true && true); // true
console.log("AND (&&)", true && false); // false

// Logical OR (||)
// Returns TRUE if both operands are true
console.log("OR (||) ", true || true); // true
console.log("OR (||) ", true || false); // true (return true if one operands is true)

let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore; // ||
console.log("Eligible ", eligibleForLoan);

// NOT (!)
let appplicationRefused = !eligibleForLoan;
console.log("Application Refused: ", appplicationRefused);
