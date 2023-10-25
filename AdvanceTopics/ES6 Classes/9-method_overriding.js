// Method Overriding
class Shape {
  // super class move method
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  // Method overriding
  // child class move method
  move() {
    // this statement below allows you to call parent methods.
    super.move();
    console.log("circle move");
  }
}

const c = new Circle();
