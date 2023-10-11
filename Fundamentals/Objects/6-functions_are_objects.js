// Fucntions are objects

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// NB:* using back `` ticks to include another function within a function
const Circle1 = new Function(
  "radius",
  `{
    this.radius = radius;
    this.draw = function() {
         console.log('draw');
    }
}
`
);

// Method available to our functions

// The call method is the same as the new that calls the [call] method.
Circle.call({}, 1);
// The apply method
Circle.apply({}, [1, 2, 3]); // passing multiple arguments

const circle = new Circle1(1);
const another = new Circle(1);

console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.constructo