import { Component } from '@angular/core';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent {
categories: string[];
constructor(){
  this.categories = ["mięso","nabiał","pieczywo","napoje",
  "wędliny","owoce i warzywa"];
}
}
