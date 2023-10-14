
// Default Parameters.

// Example 1
function interests(principal, rate, year ) {
    rate = rate || 3.5; // before ES6 
    year = year || 5;  // before ES6
      return principal * rate / 100 * year;   
   }
  console.log(interests(10000));  // retuens: 1 750
  
  // Example 2
  // ES6
  // default values parameters
  function interests(principal, rate = 3.5 , year = 5 ) {
      return principal * rate / 100 * year;   
   }
  console.log(interests(10000));  // retuens: 1 750
  
  // Example 3
  // ES6
  // default values parameters
  // if and when you give a default value to a parameter, 
  // all parameters after (rate = 3.5, year = 5) should be given a default value as well
  function anothereInterests(principal, rate = 3.5 , year ) {
      return principal * rate / 100 * year;   
   }
  console.log(anothereInterests(10000, 5));  // retuens: NaN
  
  