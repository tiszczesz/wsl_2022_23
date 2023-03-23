import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import Todo from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cw3-services';
  constructor(private httpService:HttpServiceService){}
  ngOnInit(): void {
    this.getTodos();
    
  }
  todos:Array<Todo>=[]

  getTodos(){
    this.httpService.getTodos().subscribe({
      next: td => {
        this.todos = td;
        console.log(this.todos);    
      },
      error: (e:HttpErrorResponse)=>{console.log(e.status,e.message)}
    })
  }
}
