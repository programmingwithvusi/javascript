// Tenary Operators ====================================================

// If the customer has has more than 100 points,
// they are a gold customer, otherwise,
// they are a silver customer.
let points = 10;
/*
if (points <= 100) console.log("Silver");
else console.log("Gold");
*/
let type = points > 100 ? "gold" : "silver";
console.log(type); // {output: silver}

points = 110;
type = points > 100 ? "gold" : "silver";
console.log(type); // {output: gold}
