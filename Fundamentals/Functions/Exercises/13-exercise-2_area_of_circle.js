// Functions

// Area of circle

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};
circle.radius = 4;
console.log(circle.radius); // returns: 4
console.log(circle.area); // returns: 50.26548245743669
