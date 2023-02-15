export class User{
    constructor(public firstname:string,public lastname:string,public age:number){}
    toString(){
        return `<div>${this.firstname} ${this.lastname} wiek: ${this.age}</div>`
    }
}