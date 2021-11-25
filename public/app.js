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
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// ENUMS
// enums are something that can be called a book index - to avoid remembering (thus avoid making mistakew with bad memory) various types of resource type - let's say we want to create an item list, where each item type has different number associated with - 1 for book, 2 for movie, 3 for game, etc. it is easy to forget what number is associated with what category, and it is even harder when we add new ones or modify already exisdting order. That's where enums are handy
// we just create a list of resource types:
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
;
// thanks to that, we now have a tooltip list of all types from 'ResourceType' when we need that
const docOne = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
};
const docTwo = {
    uid: 10,
    resourceType: ResourceType.DIRECTOR,
    data: { title: 'name of the wind' }
};
// and if we console log items, there will be no property name, but a number - property's table index number
console.log(docOne);
console.log(docTwo);
