
// Rest Operators.

// Example 1
// dynamic declaration and passing of parameters in a function.
function sum() {
    let total = 0;
    console.log(arguments); // Arguments(6) [1, 2, 3, 4, 5, 10, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    for(let value of arguments) {
        total += value;
    }
    return total;
  }
  console.log(sum(1, 2, 3, 4, 5, 10, 35 ));  // retuens: 60
  
  // Example 2
  // Rest operator
  // Don't confuse the spread operator with the rest operator
  function anothersum(...args) {
  //  console.log(args) // returns: 1 first element. 
  //  console.log(args); //...args returns:  [1, 2, 3, 4, 5, 10]
  return args.reduce((a, b) => a + b);
  }
  console.log(anothersum(1, 2, 3, 4, 5,10)); // returns: 25 
  
  // Example 3
  // total = 20 + 30 + 40 + 50 + 60 = 200
  // (1 - discount) = 0.9
  // total = 200 * 0.9 = 180.
  function discountFactorSum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return  total * (1 - discount);
  }
  console.log(discountFactorSum(0.1, 20, 30, 40, 50, 60)); // returns: 180
  
  // Example 4
  //function discountFactorSum(discount, ...prices, someValue) {}
  
  // returns: Rest parameter must be last formal parameter
  
  // we cannot pass any arguments after the rest operator ...prices that's the reason its called Rest operator.
  // because its last argument passed after all arguments have been included/passed
  