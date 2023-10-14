// Functions

// Sum of arguments;

// the rest operator is an Array of Arrays.
function sum(...items) {
  if (items.length === 1 && Array.isArray(items)) items = [...items[0]];
  return items.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 5, 20, 10])); //returns: 68
