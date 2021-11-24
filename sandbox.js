// ARRAYS
var names = ['luigi', 'mario', 'yoshi'];
// names is an array from now on, so it can be changed into a string or number. 
names.push('toad'); // ok
// names.push(3) // error - '3' is not a string
// names[0] = 3; // also error
var numbers = [10, 20, 30, 40];
// numbers.push('shaun'); // error - 'shaun' is not a number
// number[1] = 'shaun', // same as above
// if we need an array with different value types, we have to declare that at start:
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3; // was a string, is a numbner now
// OBJECTS
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40; // ok
ninja.name = 'ryu'; // ok
// ninja.age = '30'; // not ok - string is NaN
// ninja.skills = ['fightning', 'sneaking']; // not ok - there was no 'skills' property in object declaration, thus we can't add it now
// once we declare something, it has to have the same structure:
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
}; // is ok - values might differ, but propertioes remains the same
