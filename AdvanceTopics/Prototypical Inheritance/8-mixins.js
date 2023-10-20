// Mixins

// ES6
// when using a spread operator. We collect all the arguments and turn then into an array.
function mixin(target, ...sources) {
  // object.assign needs sources explicitly, we can not pass an array here.
  // we can use the spread operator to spread an array into multiple arguments.
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function () {
    this.hunger--;
    console.log("eating");
  },
};
const canWalk = {
  walk: function () {
    console.log("walking");
  },
};
const canSwim = {
  swim: function () {
    console.log("swimming");
  },
};

// Constructor Person
function Person() {
  // add methods and properties specific to PERSON object
}
function Dog() {
  // add methods and properties specific to DOG object
}
function Goldfish() {
  // add methods and properties specific to GOLDFISH object
}

function Duck() {
  // add methods and properties specific to DUCK object
}

// ES6 we have a new onject called Object.assign
// this object can copy one objects amd methods to another.
// we pass ampty object, then we pass one or more sources objects.
// const person = Object.assign({}, canEat, canWalk);

// Example 1 -> Person object
mixin(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);
person.eat();
person.walk();

// Example 2 -> Goldfish object
mixin(Goldfish.prototype, canEat, canSwim);
const goldfish = new Goldfish();
console.log(goldfish);
goldfish.eat();
goldfish.swim();

// Example 3 -> Duck object
mixin(Duck.prototype, canEat, canWalk, canSwim);
const duck = new Duck();
console.log(duck);
duck.eat();
duck.walk();
duck.swim();

// Example 4 -> Dog object asame as Person object
mixin(Dog.prototype, canEat, canWalk);
const dog = new Dog();
//console.log(dog);
