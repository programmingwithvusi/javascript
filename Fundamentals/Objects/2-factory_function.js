// Before refactor...
// Duplication of the circle everytime we want to create a new circle object

// Object Literal.
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

circle.draw();
console.log(circle);

const circle2 = {
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

circle2.draw();
console.log(circle2);

// ============================================
// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Draw");
    },
  };
}

const another = createCircle(3);
console.log(another);
another.draw();

const anotherCircle = createCircle(5);
console.log(anotherCircle);
anotherCircle.draw();
