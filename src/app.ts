// const anchor = document.querySelector('a');

// console.log(anchor); // it works, but what if we want to acces the 'href' property of that anchor tag? It will cause an error - TS doesn't know if there is a 'href' property, thus in case it doesn't exist, it throws an error. we can work around that in two ways:

// if (anchor) {
//     console.log(anchor.href)
// }

// const anchor2 = document.querySelector('a')!; 
// console.log(anchor.href);
// exclamation mark will tell the browser that we are sure that there is a 'href' property, so it can worry not ;)

// another thing is that TS automatically contains special types for every DOM elements, so if we declare one, TS knows it's properties and methods, and it make them available for us in an element tooltip.


// if we grab an element by it's class name, TS will treat this one as an Element, but without specification (like 'form' or 'anchor tag') - it is because class name can be applied to any different element in the HTML page, so it doesn't know that it is a form, it just knows it is going to be some kind of elements. In that case, we might want to use something known as typecasting to say what this is going to be, what type of element. 
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
        // valueAsNumber will make vale a number - shocker ;p but in TS it might be important!
    )
})