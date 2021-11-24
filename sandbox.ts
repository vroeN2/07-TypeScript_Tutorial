let age: any = 25;

age = true; // it is fine, sinc 'age' can be any type. 
console.log(age); // true
// 'any' basically reverts TS into JS (in terms of variable types)

age = 'hello';
console.log(age);

age = { name: 'luigi' };
console.log(age); 


let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

let raven: { name: any, age: any };

raven = { name: 'yoshi', age: 25};
console.log(raven);

raven = { name: 25, age: 'yoshi'};
console.log(raven);