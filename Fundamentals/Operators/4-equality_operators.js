// Equality
// Strict Equality (Type + Value) same type and same value (Preferred way)
console.log("Strict Equality");
console.log("\t", 1 === 1); // true
console.log("\t", "1" === 1); // false ('1' of type string and 1 of type number)

// Lose Equality -> not applicable in lose equality.
console.log("\nLose Equality");
console.log("\t", 1 == 1); // true ()
console.log("\t", "1" == "1"); // true ()
console.log("\t", "1" == 1); // true ()
console.log("\t", true == 1); // true ()
