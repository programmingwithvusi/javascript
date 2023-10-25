// The this keyword.
"use strict";
const Circle = function () {
  this.draw = function () {
    console.log("use of strict: ", this);
  };
};

const c = new Circle();
// Syntax is called Method Call
// Its a method on a object (circle)
c.draw(); // returns: Circle {draw: ƒ}

// getting a reference to the draw method
const draw = c.draw;

// returns a draw function as is
console.log(draw); // returns: ƒ () {console.log(this);}

// Syntaxt is call Function Call
// This is called standalone function, that is not part of an object.
// this draw method calls into the independent or function declaration inside the Circle fucntion, returns a window instance or global in Node.

// when you enable 'use strict' mode, (this) meaning the independent fuction will change to undefiened. This is to prevent us from modefying global objects.
console.log('calling function declaration with "use strict" mode');
draw();

// How Classes behaves
console.log("\nWorking with classes");
class AnotherCircle {
  draw() {
    console.log(this);
  }
}
const ac = new AnotherCircle();
// getting a reference to the draw method
const acdraw = ac.draw;
acdraw(); // returns: undefined
