import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import Todo from './models/Todo';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }
  getTodos():Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>("https://jsonplaceholder.typicode.com/todos");
  }
}
