import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent {
  onSubmitForm() {
    console.log(this._itemForm.value);
    
  }
  categories: string[];
  _itemForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.categories = ["mięso", "nabiał", "pieczywo", "napoje",
      "wędliny", "owoce i warzywa"];
    this._itemForm =this. _fb.group({
      itemName: '',
      itemPrice: 0,
      itemCategory: ''
    });
  }
}
