// Inheritance
class Shape {
  constructor(color, radius) {
    this.color = color;
    this.radius = radius;
  }
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  // when we create a constructor in the child object wwe get an error
  // we need to make sure to first call the parent constructor first within the child constructor and pass whatever arguments using the keyword (super()) as a function.
  constructor(color, font, radius) {
    super(color, radius);
    this.font = font;
  }
  draw() {
    console.log("draw");
  }
}

const c = new Circle("red", "bold", 5);
