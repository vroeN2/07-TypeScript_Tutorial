"use strict";
let greet;
// capital 'F' - again, we assign 'greet' type.
greet = () => {
    console.log('hello, world');
};
// function with 3 arguments, but the last one is optional - that's what '?' is for.
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c); // expected output: undefined
};
add(5, 10);
// we can also add default value to 'c':
const add2 = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c); // expected output: 10
};
// but then we remove '?' - optional mark - we don't use both at the same time for the same variable.
add2(5, 10);
// ! IMPORTANT ! 
// optional or default parameter should always go as the last one - if we put it not at the end, things might get mixed up
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7); // this will; make 'result' a number - since we returned a number from 'minus' function.
// we can also declare the type of a function:
const minus2 = (a, b) => {
    return a - b;
};
// it is not necessary, but sometimes might be helpful for other devs, especially with larger functions
// if we return nothing from a function (like both 'add' functions), a function still returns a value - a value called 'void', which represents complete lack of returned value. When it's compiled into JS, it will become 'undefined', but in TS it is 'void'
