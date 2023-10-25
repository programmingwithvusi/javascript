// Private Members Using Symbols

// Abstraction is one of the core principal of object arieted programming

// Abstraction => Means hiding the details and complexity, dhowing only yje essential parts. (Example: DVD player )

// ES6 Approach
// Primitive type call Symbols
const _radius = Symbol();
const _draw = Symbol();
class Circle {
  constructor(radius) {
    // this.radius = radius;
    // this["radius"] = radius;
    this[_radius] = radius;
  }
  // computer property names
  // [_draw] is a unique value or identifier, aand will be used as the name of the method.
  [_draw]() {
    console.log("Private method");
  }
}

const c = new Circle(1);
c.radius;
// workeraround
// console.log(Object.getOwnPropertyNames(c)); // returns:[]
// console.log(Object.getOwnPropertySymbols(c)); // returns:[]
// const key = Object.getOwnPropertySymbols(c)[0]; // returns:[]
// console.log(c[key]);
console.log(c); // returns:
/*
Circle Circle {Symbol(): 1}
    Symbol(): 1
    [[Prototype]]: Object
    constructor: class Circle
    Symbol(): ƒ [_draw]()
[[Prototype]]: Object
*/
