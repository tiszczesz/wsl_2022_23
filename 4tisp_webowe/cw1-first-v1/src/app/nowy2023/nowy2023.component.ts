import { Component } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-nowy2023',
  templateUrl: './nowy2023.component.html',
  styleUrls: ['./nowy2023.component.css']
})
export class Nowy2023Component {
  firstname = "Adam";
  lastname = "Nowak";
  users = ["Jan","Adam","Monika","Eliza","Franek","Łukasz"];
  MyUsers:Array<User>;

  constructor(){
    this.MyUsers = [
      new User("Adam","Nowak",45),
      new User("Monika","Frankowiak",41),
      new User("Tomasz","Bomasz",22),
      new User("Eryk","Wałecki",32),
      new User("Renata","Tymon",22),
      new User("Angelika","Grodzka",34),
    ];
  }
  

}
