import { Component, Input } from '@angular/core';
import Todo from '../models/Todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent {
load(arg0: any) {
  console.log(this.myTodos);  
}
  @Input()
  myTodos:Array<Todo>=[]
}
