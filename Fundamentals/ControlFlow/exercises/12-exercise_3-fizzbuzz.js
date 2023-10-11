// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not diviible by 3 or 5 => input
// Not a number => 'Not a number'

const output = fizzBuzz('6');
console.log(output);

function fizzBuzz(input){
if(typeof input !== 'number')
return NaN;

if((input % 3 === 0) && (input % 5 === 0 ))
return 'FizzBuzz';
if(input % 3 === 0)
return 'Fizz';
if(input % 5 === 0)
return 'Buzz';

return input;
}

const buzzOut = buzzBizz(false);
console.log(buzzOut);

function buzzBizz(input){
    return (typeof input !== 'number') 
    ? NaN 
    : (input % 3 === 0) && (input % 5 === 0 )
    ? 'FizzBuzz' 
    : (input % 3 === 0)
    ? 'Fizz'
    : (input % 5 === 0)
    ? 'Buzz'
    : input;
\
}
