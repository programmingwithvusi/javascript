//  Average -> (80 + 80 + 50) = 70
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const points = [45, 45, 100];

console.log(calculateGrade(points));

function calculateGrade(points) {
  let average = 0;
  let count = 0;
  let sum = 0;

  for (let point of points) {
    sum += point;
    count++;
  }
  average = Math.floor(sum / count);
  if (average <= 59) return average + ":" + " F";
  else if (average >= 60 && average <= 69) return average + ":" + " D";
  else if (average >= 70 && average <= 79) return average + ":" + " C";
  else if (average >= 80 && average <= 89) return average + ":" + " B";
  else if (average >= 80 && average <= 100) return average + ":" + " A";
  else return "No Makrs";
}

const levels = [45, 100, 100];
console.log(anotherCalculateGrade(levels));

function anotherCalculateGrade(levels) {
  let average = 0;
  let count = 0;
  let sum = 0;

  for (let level of levels) {
    sum += level;
    count++;
  }
  average = Math.floor(sum / count);
  return average >= 0 && average <= 59
    ? average + ":" + " F"
    : average >= 60 && average <= 69
    ? average + ":" + " D"
    : average >= 70 && average <= 79
    ? average + ":" + " C"
    : average >= 80 && average <= 89
    ? average + ":" + " B"
    : average >= 80 && average <= 100
    ? average + ":" + " A"
    : "No Makrs";
}

// Mosh Solution
const marks = [80, 80, 50];

console.log(displayGrade(marks));

function displayGrade() {
  const average = calculateAverage(marks);
  if (average < 60) return average + ":" + " F";
  if (average < 70) return average + ":" + " D";
  if (average < 80) return average + ":" + " C";
  if (average < 90) return average + ":" + " B";
  return average + ":" + " A";
}

// Object oriented
function calculateAverage(array) {
  let sum = 0;
  for (let value of array) sum += value;
  return sum / array.length;
}
