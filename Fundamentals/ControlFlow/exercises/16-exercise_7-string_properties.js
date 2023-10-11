const movie = {
  title: "Constantine",
  releaseYear: 2018,
  rating: 4.5,
  director: "Francis Lawrence",
};
console.log("Show string properties");
console.log("---------------------------");

showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") console.log(key, obj[key]);
  }
}

console.log("\nShow number properties");
console.log("---------------------------");

anotherShowProperties(movie);

function anotherShowProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") console.log(key, obj[key]);
  }
}
