import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrailerCardComponent } from './trailer-card/trailer-card.component';
import { TrailerListComponent } from './trailer-list/trailer-list.component';



@NgModule({
  declarations: [TrailerCardComponent, TrailerListComponent],
  imports: [
    CommonModule
  ]
})
export class TrailerModule { }
