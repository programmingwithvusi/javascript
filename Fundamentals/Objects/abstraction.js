// Abstraction.

function Circle(radius) {
  (this.radius = radius),
    (this.defaultLocation = { x: 0, y: 0 }),
    (this.computeOptimumLocation = (function () {
      //...
    })(
      (this.draw = function () {
        this.computeOptimumLocation();
        console.log("draw");
      })
    ));
}

const circle = new Circle(10);

// Abstraction -> Hide the details and complexity
// and only show or expose the essentials.
circle.computeOptimumLocation();
circle.draw();
