// Display even and odd numbers

console.log("Using if else Statement");
console.log("------------------");
showNumbers(10);
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) console.log(i, " EVENT");
    else console.log(i, " ODD");
  }
}

console.log("\nUsing tenary Statement");
console.log("------------------");
anotherShowNumbers(10);

function anotherShowNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    let message = i % 2 === 0 ? " EVEN" : " ODD";
    console.log(i, message);
  }
}
