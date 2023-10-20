// Prototype vs Prototypical
/*
                
                    SHAPE -> BASE/SUPER/PARENT CLASS
 Relationship:      method
     IS-A          computeOptimumLocation()  

        Circle                       Square
       DERIVED/SUB/CHILD 
 */

// Prototype - is just a egullar object in memory
// Prototype -> is essentially a parrent to another object
// Shape -> is parent to -> circle/square objects

// both x and y references the objcetBase (Parent/Super/Base) object
// BN: objectBase does not have property __proto__
let x = {};
console.log(x);
x.toString();

let y = {};
console.log(y);
y.toString();

console.log(Object.getPrototypeOf(x));
console.log(Object.getPrototypeOf(y));

console.log(Object.getPrototypeOf(y) === Object.getPrototypeOf(y));
console.log(x.__proto__ === y.__proto__);

// Prototypical
// toString() method was never defined in the x object, we created x as an empty onject.
// prototypical -> how it works when we access a property or a method javascript engine
// looks for that property or method first in the current object (x,y),
// if it does not find it, it will look all the way up to the prototype called object base.

// every object has a proptotype or parent, except the root /base/super/parent object.
