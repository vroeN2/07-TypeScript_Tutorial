// most importan difference between JS and TS is that TS uses strict types, while JS don't.

let character = 'mario';
let age = 30;
let isBlackBelt = false;

// expected output: error - type '20' is not assignable to type 'string'
// character = 20; /
character = 'luigi';

// the same goes for other types:
// age = 'yoshi'
age = 40;

// isBlackBelt= 'yes'
isBlackBelt = true;

// we can define variable type used in a function
const circ = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circ(21)); 