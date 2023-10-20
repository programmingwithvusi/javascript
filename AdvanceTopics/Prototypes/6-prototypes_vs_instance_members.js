// Prototypes vs Instance Members
// Circle object has 2 members radius and draw() method
function Circle(radius)
{
 // Instance members
 this.radius = radius;
 this.move = function ()
 {
  this.draw();
  console.log('move');
 }

}
// Prototype members
// this function create asingular instance of draw/move method instead of creating multiple instances of draw/move method in different objects (c1,c2,c3...ect)
Circle.prototype.draw = function ()
{
 //this.move();
 console.log('draw');
}
const c1 = new Circle(1);
const c2 = new Circle(1);

console.log(c1);
console.log(c2);
//c1.draw();
//console.log(draw);
c1.move();
// we can override method from the base object if and when they have writable: true.
Circle.prototype.toString = function ()
{
 return 'Circle with radius ' + this.radius;
}

console.log(c1.toString());