// Show prime number
// Prime number (whose factor are only 1 and itself)
// Composite number.

// 12 = 1, 2, 3, 4, 6, 12
// Can be divided envely by its factors.

// 11 = 1, 11
// 13 = 1, 13

showPrimes(20);
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(number);
  }
}

// Refactor function
anotherShowPrimes(15);
function anotherShowPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}
