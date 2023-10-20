// Resetting the constructor

// Instead INHERITE the functionality from an existing fucnction/obecjBase/parent
// like this
function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};
// whenever we initialize and inheritance object, you must also assign its (CONSTRUCTOR)
// this line sets the Circle.prototype to Shape.prototype
// which means the constructor that is called will be Shape constructor and Circle constructor and Circle.
Circle.prototype = Object.create(Shape.prototype);
console.log(new Circle.prototype.constructor(1)); // returns: Shape{}

// sets and initializes the Circle constructor to Circle.
Circle.prototype.constructor = Circle;
console.log(new Circle.prototype.constructor(1)); // returns: Circle {radius: 1}

// new Circle.prototype.constructor(1) longhand initialization
// new Circle(1) shorthand initialization (PREFERED)

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("draw");
};

const s = new Shape();
const c = new Circle(1);
