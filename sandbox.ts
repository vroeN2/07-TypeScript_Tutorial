// explicit types
// sometimes we want to create specific variable, but we don't want to assign any value to it yet. this is the solution:
let caracter : string;
let age: number;
let isLoggedIn: boolean;

//age = 'luigi'; // error
age = 30; // ok

//isLoggedIn = 25; // error
isLoggedIn = true; // ok

// arrays
let ninjas: string[];
// but if we want to initialize an empty array (for example to use 'push' method), we should do this:
let raveners: string[] = [];

ninjas.push('test'); // error - in browser console, it is not an array yet.
raveners.push('test'); //ok

// union types

// how about mixed array?
let mixed: (string|number)[] = [];

mixed.push('hello'); //ok
mixed.push(21); //ok
// mixed.push(true); // error

let uid: string|number;
uid = '123'; // ok
uid = 123; //ok
// uid = true; //error

// objects
let ravenOne: object;
ravenOne = { name: 'yoshi', age: 30 }; // ok
ravenOne = ['test']; // also ok - an array is special kind of object ;)

let ravenTwo: {
    name: string,
    age: number,
    beltColour: string
};

ravenTwo = { name: 'mario', age: 20, beltColour: 'black' } // ok