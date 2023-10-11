0; // Camel notation: oneTwoThree naming conversion.
// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Draw");
    },
  };
}
// Factory function we create objects without the new keyword.
// const myCircle = createCircle(1);

// Pascal notation: OneTwoThree naming conversion.
// Constructor Function or Create an object

// Constructor Function
// this keyword -> is a reference to the object that is executing this piece of code
// and RETURN an bject.
function Circle(radius) {
  this.radius = radius; // [this.radius] adding a new property to a empty object.
  this.draw = function () {
    console.log("draw");
  };
  this.move = function () {
    console.log("Move");
  };
}

// when using the new keyword 3 things happens
// 1- this -> operator creates a new empty object [const x = {}]
// 2- this -> is used to piont to this object
// 3- this -> will return that object from this function (Circle).

// Constructor Function we create objects using the new keyword.
const circle = new Circle(1);
console.log(circle.radius);
circle.draw();

// addition functoin example with or without NEW keyword.
function Person(firstName, lastName) {
  if (!new.target) {
    return new Person(firstName, lastName); // Constructor initializes with the new keyword.
  }

  this.firstName = firstName;
  this.lastName = lastName;
}

let person = Person("John", "Doe");
console.log(person.firstName);

function anotherPerson(firstName, lastName) {
  if (!new.target) {
    throw new Error("Cannot be called without the new keyword.");
  }

  this.firstName = firstName;
  this.lastName = lastName;
}

try {
  let another = /*new*/ anotherPerson("John", "Doe");
  console.log(another.firstName); // Cannot be called without the NEW keyword
} catch (e) {
  console.log(e.message);
}
