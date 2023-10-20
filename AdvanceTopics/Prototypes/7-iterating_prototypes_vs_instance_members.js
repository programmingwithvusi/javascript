// Iterating Properties
function Circle(radius) {
  // Instance members
  this.radius = radius;
  this.move = function () {
    console.log("move");
  };
}
const c1 = new Circle(1);

// Prototype members
Circle.prototype.draw = function () {
  //this.move();
  console.log("draw");
};
// BN: Object.keys() only returns instance members and Prototype members.
console.log("Objact.keys(): Returns instance members");
console.log(Object.keys(c1));

// for in loop returns all members (instance + prototype)
console.log("for in loop: Returns all members (instance + prototype)");
for (let key in c1) console.log(key);

console.log(c1.hasOwnProperty("radius")); // Returns: true
console.log(c1.hasOwnProperty("draw")); // Returns: false
console.log(c1.hasOwnProperty("move")); // Returns: true
