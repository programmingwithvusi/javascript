// show stars.
//
showStars(5);

function showStars(rows) {
  // Nested loop
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}
