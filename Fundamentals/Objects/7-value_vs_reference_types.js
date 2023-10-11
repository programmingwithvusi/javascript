// Javascript has 2 category types Value types anf refence types

/*
#===========================#==============================#
# Primitive Value types:     #  Reference Object types:    #
#===========================#==============================#
# Number                    #    Object                    #   
# String                    #    Function                  #
# Boolean                   #    Array                     #
# Symbol                    #                              #
# undefined                 #                              #
# null                      #                              #
#===========================================================

In a nulshell in javascript we have primitive and objects
*/

// Primitive values types.
// Primitive are copied by thier value.

// x and y are 2 inndependent of each other.
let x = 10;
let y = x;

x = 20;

// Reference object types
// Objects are copied by thier reference.

// when wwe copy j = f it's the address or refence that is copied.
// Both j and f are pointing to same address object in memory
let j = { value: 10 };
let f = j;

j.value = 20;

let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);
