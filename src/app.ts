import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, 'end');
});


// GENERICS

// // if we want to create function, that takes an object, and adds a random ID to it, we can start like this:
// const addUID = (pbj: object) => {
// // but then, we won't be able to access it's properties, like
// console.log(docOne.name) // expected output: error
// // it is because we can use any object here, so it can or cannot have a property called 'name'. To work around that, we can do it like this:
// const addUID = <T>(obj: T) {
// // and it will know all properties of the object. The new problem that appears here is that we can now use not only objects, but also any other type, for example
// let docOne = addUID('hello);
// // and we don't want that to be possible. We can then be more specific with T:
// const addUID = <T extends object>(obj: T) {
// // or even more specific, so now it has to be an object, but with 'name' property that has a string value:
const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});
console.log(docOne);


// // with interfaces
// interface Resource {
//   uid: number;
//   resourceName: string,
//   data: '???';
// }
// the whole point is that we don't know what type data will be, so to avoid errors, we can also use generic here:
interface Resource<T> {
  uid: number;
  resourceName: string,
  data: T;
}
// with that, we can be more flexible:
const docTwo: Resource<string> = {
  uid: 1,
  resourceName: 'person',
  data: 'string'
}
// or 
const docThree: Resource<object> = {
  uid: 2,
  resourceName: 'person 2',
  data: { name: 'shaun' }
}

const docFour: Resource<string[]> = {
  uid: 3,
  resourceName: 'shoppingList',
  data: ['bread', 'milk', 'butter']
}

console.log(docTwo, docThree, docFour);