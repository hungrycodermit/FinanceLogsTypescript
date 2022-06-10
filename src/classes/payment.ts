import { HasFormatter } from '../interfaces/HasFromatter.js';

//classes

export class Payment implements HasFormatter{
    recepient: string;
    details: string;
    amount: number;  

    constructor(recepient: string, details: string, amount: number){
        this.recepient = recepient;
        this.details = details;
        this.amount = amount;
    }

    format(){
        return `recepient: ${this.recepient}, details: ${this.details}, amount: ${this.amount}`;
    };
    
}