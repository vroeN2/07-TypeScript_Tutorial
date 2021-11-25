"use strict";
// classes
// keyword 'public' is a default value - there is no need to write that, but in case we want, we can :)
// if we add a keyword 'private' before class property declaration, it will become unaccessible from outside of that class. 
// as expected, 'readonly' keyword makes a property accessible for read only. it can't be changed outside of the class.
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // we can also skip above, and just define them in the constructor BUT each property has to be preceded by one of the keywords!
    constructor(/*c: string, d: string, a: number */ client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = c;
        // this.details = d;
        // this.amount = a;
    }
    format() {
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on mario website', 250);
const invTwo = new Invoice('luigi', 'work on luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
