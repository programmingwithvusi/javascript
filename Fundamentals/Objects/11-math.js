// Math objects


// Math.random()
console.log(Math.random());

function getRandomArbitrary(min, max) {
     return Math.random() * (min -  max) + min;
}

let randomnum  = getRandomArbitrary(1, 46)
for (const key in randomnum) {
     console.log(key);
} 
let max = 5;
for (let i = 1; i < max; i++) {
    
    console.log(i, getRandomArbitrary(1, 45));
}

// Math.round()
console.log(Math.round(1.9));

// Math.max()
console.log(Math.max(1,2,3,4,5,6,7,8,9,10))

// Math.min()
console.log(Math.min(1,2,3,4,5,6,7,8,9,10));

//
console.log();