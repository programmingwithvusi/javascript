//  Intermediate Function Inheritance

// The chain of Inheritance
function Shape(color) {
  // color property will be available to all the objects
  // when you don't set the new instances of the circle object,
  // it will be set on the window, global object.
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

// refactor the noisy code with 2 parameters that expected to be constructors.
// this extend function is called intermediate inheritance function
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  //new Circle.prototype.constructor(1);
}

function Circle(radius, color) {
  // the object to be used as a current object.
  // pass the circle object with the property of color to the shape object.
  Shape.call(this, color); // This how you call the Super Constructor
  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function () {
  console.log("draw");
};
const s = new Shape();
const c = new Circle(1, "red");

// Eample with Square object
function Square(size) {
  this.size = size;
}
extend(Square, Shape);
//new Square.prototype.constructor(1);

const sq = new Square(12);
