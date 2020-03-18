import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrailerCardComponent } from './trailer-card/trailer-card.component';
import { TrailerListComponent } from './trailer-list/trailer-list.component';
import { TrailerRoutingModule } from './trailer-routing.module';



@NgModule({
  declarations: [TrailerCardComponent, TrailerListComponent],
  imports: [
    CommonModule,
    TrailerRoutingModule,
  ],
  exports:[TrailerListComponent]
})
export class TrailerModule { }
