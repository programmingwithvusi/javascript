// ARRAYS

// Mapping an Array

let numbers = [-1, 5, 20, 35, 2, 3, 1];

const filtered = numbers.filter(n => n >= 0);

//  Example 1
const items = filtered.map(function(value) {
  return '<li>' + value + '</li>';
})
const html = '<ul>' + items.join('') + '</ul>';
console.log(html); // returns: <ul><li>5</li><li>20</li><li>35</li><li>2</li><li>3</li><li>1</li></ul>

// Example 2
const items2 = filtered.map(n =>  ({value: n}));
console.log(items2);
/*
 * returns:
0: {value: 5}
1: {value: 20}
2: {value: 35}
3: {value: 2}
4: {value: 3}
5: {value: 1}
length: 6
*/


// Example 3
const items3 = filtered
.filter(n=> n >= 0 )
.map(n =>  ({value: n}))
console.log(items3);
/**
 * returns: 
0: {value: 5}
1: {value: 20}
2: {value: 35}
3: {value: 2}
4: {value: 3}
5: {value: 1}
length: 6
 */


// Example 4
const items4 = filtered
.filter(n => n >= 0)
.map(n =>  ({value: n}))
.filter(obj => obj.value > 1);
console.log(items4);
/**
 * returns: 
0: {value: 5}
1: {value: 20}
2: {value: 35}
3: {value: 2}
4: {value: 3}
length: 5
 */


// Example 5
const items5 = filtered
.filter(n => n >= 0)
.map(n =>  ({value: n}))
.filter(obj => obj.value > 1)
.map(obj =>  obj.value);
console.log(items5); // returns: (5) [5, 20, 35, 2, 3]
