// Validate the truthy and Falsy
// Falsy
// undefined
// null
// ''
// false
// 0
// NaN

const array = [0, undefined, null, "", NaN, false, 1, 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;

  return count;
}

console.log(countFalsy(array));

function countFalsy(array) {
  let count = 0;
  for (let value of array) if (!value) count++;

  return count;
}
