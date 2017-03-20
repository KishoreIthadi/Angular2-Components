import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PaginationExComponent } from './paginationEx/paginationEx.component';
import { RatingExComponent } from './ratingEx/ratingEx.component';

import { ComponentsModule } from '.././components/components.module';

@NgModule({
  exports: [PaginationExComponent, RatingExComponent],
  declarations: [PaginationExComponent, RatingExComponent],
  imports: [ComponentsModule]
})

export class ExamplesModule { }