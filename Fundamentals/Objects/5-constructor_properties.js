// Every object in javascript has a contructor property that references the function that was used to create that object

// let x = {}  === let x = new object

// Every object has a contructor property that references the function that was used to create that object
new String(); // '', "" string literals
new Boolean(); // true, false boolean literals
new Number(); // 1,2,3,4,5 number literals

// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Draw");
    },
  };
}

const circle = new createCircle(1);
console.log(circle.constructor);

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);
console.log(another.constructor);

let x = {}; //equals to let x = new object();
console.log(x);
