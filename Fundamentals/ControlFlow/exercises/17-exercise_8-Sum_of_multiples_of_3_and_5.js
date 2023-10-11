console.log(sum(10));

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}

console.log(anotherSum(15));
function anotherSum(limit) {
  let sum = 0;
  let result = 0;
  for (let i = 0; i <= limit; i++)
    result = i % 3 === 0 || i % 5 === 0 ? (sum += i) : 0;
  return result;
}
