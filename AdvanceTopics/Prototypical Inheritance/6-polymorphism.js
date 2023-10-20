//  Polymorphism

// Poly -> means many
// morph -> form / morphism -> forms

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this);
  console.log("Duplicate circle");
};

// Polymorphism
function Square() {}

extend(Square, Shape);

Square.prototype.duplicate = function () {
  // Shape.prototype.duplicate.call(this);
  console.log("Duplicate square");
};
const c = new Circle();

const shapes = [new Circle(), new Square()];

for (let shape of shapes) {
  shape.duplicate();
}
