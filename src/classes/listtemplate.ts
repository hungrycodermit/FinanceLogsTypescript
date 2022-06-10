import { HasFormatter } from "../interfaces/HasFromatter";

export class ListTemplate{
    constructor(private ul: HTMLUListElement){}

    render(item: HasFormatter, title: string){
        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');

        h4.innerText = title;
        p.innerText = item.format();

        li.append(h4);
        li.append(p);

        this.ul.prepend(li);

    }
}