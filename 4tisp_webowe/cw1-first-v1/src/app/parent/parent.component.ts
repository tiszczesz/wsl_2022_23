import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
run(event: string) {
  console.log(event);
  
}
  infoForChild = ["info1","moja 2","rybka","----"];
}
