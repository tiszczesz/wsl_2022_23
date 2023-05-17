import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Item from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private _http:HttpClient) { }
  addItem(data:Item):Observable<any>{
    return this._http.post("http://localhost:3000/items",data)
  }
  getAllItems():Observable<any>{
    return this._http.get("http://localhost:3000/items");
  }
}
