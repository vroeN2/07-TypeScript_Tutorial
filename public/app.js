import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
// // lines below structures our code a bit more, and makes things a little bit more secure in the future
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing work', 200);
// let docs: HasFormatter[] = []; // we just restricted that this array will contain only elements that follows 'HasFormatter' rules. They can come from any number of different classes, as long as they follow 'HasFormatter' rule set. This means, we are sure that any element in this array has a format function that returns a string.
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo);
// invoices.forEach(inv => {
//   console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
// })
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
