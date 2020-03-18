import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrailerListComponent } from './trailer-list/trailer-list.component';


const routes: Routes = [
    {path:'tr/:id',component:TrailerListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrailerRoutingModule { }
