import { Component } from '@angular/core';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent {
    time2 = ""
    time = setInterval(()=>{this.time2 =  new Date().toLocaleTimeString()},1000);
}
