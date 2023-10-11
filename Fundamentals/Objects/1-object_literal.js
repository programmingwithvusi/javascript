// Object-oriented Programming (OOP)

// Object Literals

// No need to use independent varibles when using an object
let redius = 1;
let x = 1;
let y = 1;

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("Draw");
  },
  move: function () {
    console.log("Move");
  },
};

// Both function are hight related to the variables above.
// But instead of using seperate variables we can use an circle object.
// Which we will have access to all the the prorperties of the circle object
// function draw() {}
// function move() {}

// METHOD -> it's METHOD not a FUNCTION as it's called from a [function (draw/move)] of [circle object]
circle.draw(); // Method
circle.move(); // Method
