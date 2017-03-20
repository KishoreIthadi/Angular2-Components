import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PaginationComponent } from './pagination/pagination.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  exports: [PaginationComponent, RatingComponent],
  declarations: [PaginationComponent, RatingComponent],
  imports: [BrowserModule]
})

export class ComponentsModule { }