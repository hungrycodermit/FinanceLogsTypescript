import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listtemplate.js';
import { Payment } from './classes/payment.js';
import { HasFormatter } from './interfaces/HasFromatter.js';

//grabbing ul element
let ul = document.querySelector('ul')!;

const list = new ListTemplate(ul);

//grabbing form
let form = document.querySelector('.new-item-form') as HTMLFormElement;

//grabbing input fields

let type = document.querySelector('#type') as HTMLSelectElement;
let toFrom = document.querySelector('#tofrom') as HTMLInputElement;
let details = document.querySelector('#details') as HTMLInputElement;
let amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if(type.value.toLowerCase() === 'invoice'){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
        list.render(doc, type.value);
    } else{
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
        list.render(doc, type.value);
    }


})