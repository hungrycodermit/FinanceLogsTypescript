import { HasFormatter } from '../interfaces/HasFromatter.js';

//classes

export class Invoice implements HasFormatter{
    client: string;
    details: string;
    amount: number;  

    constructor(client: string, details: string, amount: number){
        this.client = client;
        this.details = details;
        this.amount = amount;
    }

    format(){
        return `client: ${this.client}, details: ${this.details}, amount: ${this.amount}`;
    };
    
}