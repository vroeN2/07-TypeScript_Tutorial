// explicit types
// sometimes we want to create specific variable, but we don't want to assign any value to it yet. this is the solution:
var caracter;
var age;
var isLoggedIn;
//age = 'luigi'; // error
age = 30; // ok
//isLoggedIn = 25; // error
isLoggedIn = true; // ok
// arrays
var ninjas;
// but if we want to initialize an empty array (for example to use 'push' method), we should do this:
var raveners = [];
ninjas.push('test'); // error - in browser console, it is not an array yet.
raveners.push('test'); //ok
// union types
// how about mixed array?
var mixed = [];
mixed.push('hello'); //ok
mixed.push(21); //ok
// mixed.push(true); // error
var uid;
uid = '123'; // ok
uid = 123; //ok
// uid = true; //error
// objects
var ravenOne;
ravenOne = { name: 'yoshi', age: 30 }; // ok
ravenOne = ['test']; // also ok - an array is special kind of object ;)
var ravenTwo;
ravenTwo = { name: 'mario', age: 20, beltColour: 'black' }; // ok
