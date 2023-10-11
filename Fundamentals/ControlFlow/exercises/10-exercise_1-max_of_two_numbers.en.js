// Write a function that takes two number and returns the maximum of the two.

let result = compareTwoNumbers(10, 5);
console.log(result);

function compareTwoNumbers(firstNumber, secondNumber) {
  console.log("Using the if statement condition");
  if (firstNumber > secondNumber) return firstNumber;
  return secondNumber;
}
let anotherResult = anotherCompareTwoNumbers(0, 5);
console.log(anotherResult);

function anotherCompareTwoNumbers(firstNumber, secondNumber) {
  console.log("\nUsing Tenary condition");
  return firstNumber > secondNumber ? firstNumber : secondNumber;
}
