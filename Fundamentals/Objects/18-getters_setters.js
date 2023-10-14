// Getters and Setters.

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };
  /*
    this.getDefaultLocation = function () {
      return defaultLocation;
    };
  */
  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !y.value) throw new Error("Invalid location");
      defaultLocation = value;
    },
  });
}

const circle = new Circle(10);
circle.defaultLocation = 1; // Output: Invalid location.

// not prefered syntax the fat that we calling a method.
// it's viable to call the property directly.
//circle.getDefaultLocation();

circle.draw();
