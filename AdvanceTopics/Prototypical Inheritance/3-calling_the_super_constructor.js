//  Calling the Super Constructor

function Shape(color, font) {
  // color property will be available to all the objects

  // when you don't set the new instances of the circle object,
  // it will be set on the window object.
  this.color = color;
  this.font = font;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
new Circle.prototype.constructor(1);

function Circle(radius, color, font) {
  // the object to be used as a current object.
  // pass the circle object with the property of color to the shape object.
  Shape.call(this, color, font); // THis how you call the Super Constructor
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("draw");
};

const s = new Shape();
const c = new Circle(1, "red", "bold");
console.log(new Circle(3, "blue", "normal"));
console.log(new Circle(3, "purple", "20px"));
console.log(c.color);
console.log(c.font);
