// FUNCTIONS

// Arguments

// Example 1
// strict declaration and passing of parameter in a function
function sum(a, b) {
    return a + b;
  }
  console.log(sum(1, 2)); // returns: 3
  console.log(sum(1)); // returns: (NaN) Not a Number
  console.log(sum()); // returns: (NaN) Not a Number
  console.log(sum(1, 2, 3, 4, 5)); // returns: 3
  
  // Example 2
  // dynamic declaration and passing of parameters in a function.
  function anotherSum() {
    let total = 0;
  for(let value of arguments)
        total += value;
    //console.log(arguments);
    return total;
  }
  
  console.log(anotherSum(1, 2, 3, 4, 5,10)); 
  
  // Example 3
  // dynamic declaration and passing of parameters in a function.
  function makeAnotherSum() {
    let total = 0;
    for(let i = 0; i < arguments.length; i++)
      total += arguments[i];
      //for(let value of arguments)
      //console.log(arguments);
    return total;
  }
  
  console.log(makeAnotherSum(1, 2, 3, 4, 5,10)); 
  
  //example 4
  function whileSum() {
    let i = 0;
    let total = 0;
    while (i < arguments.length){
      total += arguments[i];
      i++;
    }
    return total;
  }
  console.log(whileSum(1, 2, 3, 4, 5,10)); 

  //example 5 using the reduce method and the rest operator for multiple arguments.
  function reduceSum(...args) {
    return args.reduce((a, b) => a + b);
  }
  console.log(reduceSum(1, 2, 3, 4, 5,10)); 