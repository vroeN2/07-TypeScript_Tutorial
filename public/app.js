import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // because we use tuples here, TS now knows that values contains a string, another string and a number
    let values;
    // so we can define it like this
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        // and then just spread that values instead of typing them each time manually
        doc = new Invoice(...values);
    }
    else {
        // same here
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// tuples
// we know, that if we define an array like this
let arr = ['ryu', 25, true];
// we can set any of it's element to any type:
arr[0] = false;
arr[1] = 'yoshi';
//or we can even rewrite the whole array from the start:
arr = [30, false, 'yoshi'];
// so any type used in array declaration can take any place in that array
// so what if we want to make sure, that specific indexes has specific types? that's a place to use tuples:
// let tup: [string, number, boolean] = [40, true, 'true'] // expected output: error - we not only have to use the same types as declared, but also in the right positions:
let tup = ['true', 30, true];
tup[0] = 'ken';
tup[1] = 30;
// let student: [string, number];
// student = ['chun-li', 12321];
