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

// ENUMS
// enums are something that can be called a book index - to avoid remembering (thus avoid making mistakew with bad memory) various types of resource type - let's say we want to create an item list, where each item type has different number associated with - 1 for book, 2 for movie, 3 for game, etc. it is easy to forget what number is associated with what category, and it is even harder when we add new ones or modify already exisdting order. That's where enums are handy
// we just create a list of resource types:
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

// and we use that as 'resourceType' property type:
interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

// thanks to that, we now have a tooltip list of all types from 'ResourceType' when we need that
const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'name of the wind' }
}
const docTwo: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.DIRECTOR,
  data: { title: 'name of the wind' }
}

// and if we console log items, there will be no property name, but a number - property's table index number
console.log(docOne);
console.log(docTwo);