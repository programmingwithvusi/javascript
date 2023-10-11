// Adding and removing properties to an object/function.

function Circle(radius) {
  (this.radius = radius),
    (this.draw = function () {
      console.log("draw");
    });
}

const circle = new Circle(10);

// Adding proterties statically and dynamically
circle.location = { x: 1 };
circle["location"] = { x: 10 };

// dynamic properties
const propertyName = "location";
circle[propertyName] = { x: 30 };

// Removing Properties statically and dynamically

delete circle.draw;
delete circle["location"];
