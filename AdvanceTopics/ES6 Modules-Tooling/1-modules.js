// Modules
// Mainatainability
// Reuse
// Abstract
// ADM => Asynchonise Module Defination -> Browser
// CommonJS => Node.js
// UMD => Universal Module Defination
// ES6 Modules =>  Browser/Node.js
// we only focus on: ES6 Modules and CommonJS
// private property

const _radius = new WeakMap();
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  draw() {
    console.log("Circle with radius " + _radius.get(this));
  }
}
const c = new Circle(10);
console.log(_radius.get(c)); // returns: 10
c.draw();
