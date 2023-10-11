// Break and Continue when working with loop.
// These 2 keywords can change how the loop behaves.

console.log("break loop");
console.log("-----------------------");
let i = 0;
while (i <= 10) {
  if (i === 5) {
    console.log("break on 5 and jump out of the loop");
    break;
  } // with break keyword we jump out of the loop
  console.log("\n", i);
  i++;
}

console.log("\ncontinue loop we jump to the next iteration");
console.log("-----------------------");
let j = 0;
while (j <= 10) {
  if (j % 2 === 0) {
    j++;
    continue; // with continue keyword we continue to th next line of code.
  }
  console.log("\n", j);
  j++;
}
