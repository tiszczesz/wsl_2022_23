import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
go(info: string) {
  this.eventItem.emit("to jest od dziecka: "+info);
}
  @Input()
  info:string = "";

  @Output()
  eventItem = new EventEmitter<string>();
}
