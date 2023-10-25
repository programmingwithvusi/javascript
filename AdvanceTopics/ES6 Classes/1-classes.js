// Classes

// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function () {
//     console.log("draw");
//   };
// }

class Circle {
  constructor(radius) {
    this.radius = radius;
    // if you don't want to prototype methods, will need to define them in constructor function/method. like this:

    this.move = function () {};
  }
  // all methods created out side the constructor are main class methods. These methods will appear in the prototype circle object.
  draw() {
    console.log("draw");
  }
}

const c = new Circle(5);
// classes they are essentially constructor functions
console.log(typeof Circle); // returns: function
