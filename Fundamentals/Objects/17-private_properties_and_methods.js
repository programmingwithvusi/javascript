// Abstraction -> Private properties and methods

function Circle(radius) {
  // using the let keyword you declare a memmber as private within object.

  this.radius = radius; // this keyword refrences the circle object.

  let defaultLocation = { x: 0, y: 0 }; // local variable inside circle function.  And only scope to this function.
  let computeOptimumLocation = function (factor) {
    //...
  };

  this.draw = function () {
    let x, y; // local variable inside circle function. And only scope to this function.
    // Closure scope function dies after calling the draw method.
    computeOptimumLocation(0.1);
    // defaultLocation
    // this.radius -> To acces the members of the circle object/function.
    console.log("draw");
  };
}

const circle = new Circle(10);
circle.circle.draw();
