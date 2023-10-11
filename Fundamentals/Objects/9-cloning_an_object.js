
const circle ={
    radius: 1,
    draw() {
         console.log('raw');
    }
}

// old way of cloning an object.
const another ={};
for (const key in circle) 
    another[key] = circle[key];


// new ways of cloning objects in javascript
let another1 = Object.assign({}, circle) ;
console.log(another1);

let another2 = Object.assign({
    color:'yellow'
}, circle) ;
console.log(another2);

let another3 = {...circle} ;
console.log(another3);