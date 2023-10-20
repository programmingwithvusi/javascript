//  Method Overriding Function Inheritance

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

// OVERRIDING
// Some situations you may find the the implementation you have in the Parant object,
// may not be a idea for speciifc shape object such as Circle object and you want to have
// a specialize implementation for a Circle object.
// re-implementing a method in a child object.
Circle.prototype.duplicate = function () {
  // some time you want to cal the implementation on the Parent as well
  Shape.prototype.duplicate.call(this);
  console.log("Duplicate circle");
};

const c = new Circle();
