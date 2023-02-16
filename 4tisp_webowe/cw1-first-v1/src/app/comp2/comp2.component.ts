import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  text1 = "To jest tekst 1";
    text2: string;
    text3 = "to jest tekst do innerHTML";
    red = "red";
    imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Giewont_a2.jpg/440px-Giewont_a2.jpg"
    text4 = "to będzie zmienione";
    
    constructor(){
      this.text2 = "to jest tekst 2";
    }
}
