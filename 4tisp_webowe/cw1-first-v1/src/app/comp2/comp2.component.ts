import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  text1 = "To jest tekst 1";
    text2: string;
    constructor(){
      this.text2 = "to jest tekst 2";
    }
}
