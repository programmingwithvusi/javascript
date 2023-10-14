
// Getters and Setters.

const person = {
    firstName: 'Vusi',
    lastName: 'Dhlamini',
    // fullName: function() {}  old syntax before ES6
    get fullName() {
      return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
      const parts = value.split(' ');
      this.firstName = parts[0]; 
      this.lastName = parts[1]; 
      return parts;
    }
  }
  
  // Example 1 
  // problem with this approach, everytime we want to use fullname, we need to call
  // the firstName and lastName properties sererately and then join them each want use them
  // in multiple place. (Redundent). 
  console.log(`${person.firstName} ${person.lastName}`);
  
  // Example 2
  // first problem with this approach.
  // its readonly property, we cannot set person's fullname from the outside of person object.
  // like person.fullname = 'John Doe'
  
  // second problem
  // when calling the fullName() as a method instead of a property.
  // like fullName instead of fullName().
  
  //console.log(person.fullName());
  
  // Example 3
  // Getters -> to access properties
  // Seeters -> to change (muted) them.
  person.fullName = 'John Doe'
  console.log(person.fullName);
  console.log(person);
  
  