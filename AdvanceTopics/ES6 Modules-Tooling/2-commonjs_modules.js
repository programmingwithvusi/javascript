// Modules

// Things that are highly related should always go together => we alled that Cohesion

// Mainatainability
// Reuse
// Abstract
// ADM => Asynchonise Module Defination -> Browser
// CommonJS => Node.js
// UMD => Universal Module Defination
// ES6 Modules =>  Browser/Node.js
// we only focus on: ES6 Modules and CommonJS
// private property

// implementation Details
const _radius = new WeakMap();

// Public interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  draw() {
    console.log("Circle with radius " + _radius.get(this));
  }
}

export default Circle;
// module.exports.Circle = Circle;
//module.exports.Square = Square;

// This session will go to a new file. which creates what we call module

// CommonJS Modules
// const Circle = require("./modules/Circle.js");
import Circle from "./modules/Circle.js";
const c = new Circle(10);
c.draw();
