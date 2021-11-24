// we already learnt this:
// let greet: Function;
// but what if we want to be more specific with what type of a function this variable can hold? well, then we can specify function signature:

// example 1
let greet: (a: string, b: string) => void; // this function will return nothing, at it requires two strings as parameters. For example:
greet = (name: string, greetings: string) => {
    console.log(`${name} says ${greetings}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}
// we need 'else' for that if, because function has to return a number. With no 'esle', it would return 'undefined'.
// we suimply have to match the template

// example 3
let logDetails: (obj: {name: string, age: number}) => void;

type person = { name: string, age: number};

logDetails = (raven: person) => {
    console.log(`${raven.name} is ${raven.age} years old`);
}

// when we declare a function based on a signature, we don't have to match template's required variable names. We must match their types tho.