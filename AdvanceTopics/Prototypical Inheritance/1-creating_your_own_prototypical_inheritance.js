// Creating your own Prototypical Inheritance.

// Instead INHERITE the functionality from an existing fucnction/obecjBase/parent
// like this
function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

Circle.prototype = Object.create(Shape.prototype);

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("draw");
};

// NB: we dont want duplicate by created the same functionality all the time.
/// like this

/**
  function Square () {}
  Square.prototype.duplicate = function () {console.log('duplicate')} 
 * */

// Before
// Circle.prototype = Object.create(Object.prototype); // the circle was inheritng from objectBase

// After
// Circle.prototype = Object.create(Shape.prototype); // we changed the circle object to inherite from an existing Shape.prototype/shapeBase
//console.log(new Circle.prototype.constructor(1));

// here is a visualization of what we have in-memory
// Object c -> inheriates from ->  circleBase (Circle.prototype) -> inherite from objectBase (Parant)
// Object s -> inheriates from ->  shapeBase (Shape.prototype) -> inherite from objectBase (Parant)

// Now to setup inheritance on the above objects

// NB: object c inherites -> circleBase -> inherites -> shapBse -> inherites -> objectBase.

// In JavaScript we have a method for creating an object with a given prototype.

const s = new Shape();
const c = new Circle(1);
