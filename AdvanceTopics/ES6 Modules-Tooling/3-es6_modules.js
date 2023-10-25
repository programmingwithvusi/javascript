const _radius = new WeakMap();

export class AnotherCircle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  draw() {
    console.log("Circle with radius " + _radius.get(this));
  }
}

// import {Circle} from '/AnotherCircle';
// const c = new Circle(10);
// c.draw()
