import { Component, OnInit } from '@angular/core';
import Item from '../models/item';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  public items!:Item[];
  displayedColumns: string[] = ['Name', 'Price','Category'];
  dataSource!:Item[]
  ngOnInit(): void {
    this._itemService.getAllItems().subscribe({
      next:(val:Item[])=>{
        this.items = val;
        this.dataSource = this.items;
        console.log(this.items);        
      },
      error:(err)=>{
        console.log(err);        
      }
    })
  }
  constructor(private _itemService:ItemsService){}
}
