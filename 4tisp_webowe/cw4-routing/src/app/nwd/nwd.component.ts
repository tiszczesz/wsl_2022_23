import { Component } from '@angular/core';

@Component({
  selector: 'app-nwd',
  templateUrl: './nwd.component.html',
  styleUrls: ['./nwd.component.css']
})
export class NwdComponent {

clickHandler() {
  console.log("a: ",this.a);
  console.log("b: ",this.b);
  
  
  this.result = `NWD(${this.a},${this.b})= ${this.countNWD(this.a,this.b)}`;
}
  a:number=0;
  b:number=0;
  result:string='';
  countNWD(a:number,b:number):number{
    let temp = a;
    while(b!=0){
      temp = a;
      a = b;
      b = temp%b;
    }
    return a;
  }
}
