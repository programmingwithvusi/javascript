// static Methods
// in classical orieateed languages we two types of methods
// Instance method and Static method
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  // draw() is an instance Method -> its available to the object created it.
  draw() {}

  // Static Method

  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

// static method
// does not exists in the new instance of (circle), but exists only in the instance of the Parent class (Circle).
// often used to create utilities that are not specific to the class
// not valid to circle object.

// circle.parse(); // circle.parse is not a function

// valid to Circle object
// Circle.parse();

// const circle = new Circle(3); // returns: "undefined" is not valid JSON

// valid call
const circle = Circle.parse('{ "radius": 4}');

// example 2

// Math class is another similar object that uses static methods.
class Math2 {
  static abs(value) {
    //...
  }
}

Math2.abs(2);
