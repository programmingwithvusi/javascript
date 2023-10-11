// String primitive
const message = 'This is my first message';

// String object
const another = new String('Hi'); 

console.log(message.length); // 24
console.log(message[0]); // T
console.log(message[1]); // h
console.log(message.includes('my')); //true
console.log(message.includes('not')); // false
console.log(message.startsWith('This')); // true
console.log(message.startsWith('this')); // false
console.log(message.endsWith('e')); // true

console.log(message.lastIndexOf('my')); // index of 'my' is 8

console.log(message.replace('first', 'second'));  
// replace first with second 
// output: This is my second message

// Upper case
console.log(message.toUpperCase(message)); // THIS IS MY FIRST MESSAGE

// trim string
console.log(message.trim()); 

// insert special characters in a string sunch as using \ escape character '
console.log((message));  // This is my 'first message

// insert on new line
const message1 = 'This is my\n first message';
console.log(message1);  // This is my
                        // first message
// split string -> my favorate function in java.
console.log(message.split(' '));


