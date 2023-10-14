// Try Catch.

const person = {
  firstName: "Vusi",
  lastName: "Dhlamini",
  // fullName: function() {}  old syntax before ES6
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string")
      // return; // the code below or next line of code will not execute.
      throw new Error("Value is not a string"); // this an Exeception ad
    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter a first and last name.");

    this.firstName = parts[0];
    this.lastName = parts[1];
    return parts;
  }
};
try {
  person.fullName = ""; // the code below or next line of code will not execute.
  //person.fullName = ""; // the code below or next line of code will not execute.
  console.log(person.fullName);
} catch (e) {
  // Basically when a new Error exception is thrown, the catch will render the new error.
  console.log(e.message);
  alert(e);
}
console.log(person);
