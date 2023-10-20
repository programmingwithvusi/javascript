// Constructor Prototypes.

//Example 1
const myObj = {};
const otherObj = Object.getPrototypeOf(myObj) //is the same as 
// myObj.__proto__ (parent of myObj)
// Constructor.prototype (parent of myObj)
// Constructors have protoptype property
console.log(otherObj);
console.log(myObj.__proto__);
console.log(Object.prototype);

// Example 2
function Circle(radius)
{
 this.radius = radius;
}

Circle.prototype // this a object that wiil be used as a parent for objects created by the circle constructor.
const circle = new Circle(1);

let obj = {}
//console.log(obj);

// obj is created using object.Constructor function.
// that is translate to new object()
// this has a Object.prototype
// Object.prototype is the object that will be used as a prototype for all objects created by this constructor

// both obj.__proto__ and Object.prototype are equal
console.log(obj.__proto__); // __proto__ is the base/parent object
console.log(Object.prototype); // __proto__ is the base/parent object

// Example 3

// both array.__proto__ and Array.prototype are equal.
let array = [];
console.log(array.__proto__); // this called array base/parent;

// Array constructor will be called
console.log(Array.prototype); // this constructor property will reference Array Base/parent

// Example 4
// both circle and Circle.prototype are equal. 
console.log(circle); // this returns Circle base
console.log(circle.__proto__); // this returns Circle base
console.log(Circle.prototype); // returns circle base
