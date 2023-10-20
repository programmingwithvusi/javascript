// Multi-level Inheritance

// the link in the chain is:
// myarray -> is derived from -> arrayBse -> is derived from -> objectBasevits called multilevel inheritance.
let myarray = [];
console.log(myarray);

// Object created by a given constructor will have the same prototype
// All circle object created by created by the circle constructor will have the same prototype.

// circle object -> is iherites from -> circleBase object -> is iherites from -> objectBase
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(2);
