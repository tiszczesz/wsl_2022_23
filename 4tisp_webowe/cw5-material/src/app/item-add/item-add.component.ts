import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Item from '../models/item';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent {
  onSubmitForm() {
    console.log(this._itemForm.value);    
    if(this._itemForm.valid){
     this._itemService.addItem(this._itemForm.value).subscribe({
      next: (val:any)=>{
        alert("dodano rekord");
      },
      error:(err)=>{console.log(err);
      }
     });
    }
  }
  categories: string[];
  _itemForm: FormGroup;
  constructor(private _fb: FormBuilder,private _itemService:ItemsService) {
    this.categories = ["mięso", "nabiał", "pieczywo", "napoje",
      "wędliny", "owoce i warzywa"];
    this._itemForm =this. _fb.group({
      Name: '',
      Price: 0,
      Category: ''
    });
  }
}
