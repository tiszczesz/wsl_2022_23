import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemAddComponent } from './item-add/item-add.component';
import { ItemListComponent } from './item-list/item-list.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'add', component:ItemAddComponent},
  {path:'list', component:ItemListComponent},
  {path:"**", component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
