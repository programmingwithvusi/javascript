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
export const _radius = new WeakMap();

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
