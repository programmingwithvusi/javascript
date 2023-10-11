// For...in loop
console.log("For...in loop");
console.log("-------------------");
const person = {
  name: "Vusi",
  age: 30,
};

// key value holds the properties of the person (name, age)
console.log("Key - Properties");
for (let key in person) {
  console.log(key);
}

console.log("");
// Brackets notation with key - also allows you to acccess the notation
console.log("Brackets notation with Key Property value");
for (let key in person) {
  console.log(person[key]);
}

console.log("");
// Dot notation - allows you to access the property value.
console.log("Dot notation - Property values");
console.log(person.name);
console.log(person.age);

console.log("");
// Brackets notation - also allows you to acccess the notation
console.log("Brackets notation - Property value");
console.log(person["name"]);
console.log(person["age"]);

// Array examples of - for..in loop which is not recommended to use with arrays

const colors = ["red", "green", "blue"];

for (let index in colors) console.log(index, colors[index]);
