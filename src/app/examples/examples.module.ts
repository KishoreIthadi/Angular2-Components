import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PaginationExComponent } from './paginationEx/paginationEx.component';
import { RatingExComponent } from './ratingEx/ratingEx.component';
import { MessagesExComponent } from './messagesEx/messagesEx.component';

import { Angular2CompsModule } from '.././components/angular2comps.module';

@NgModule({
  exports: [PaginationExComponent, RatingExComponent, MessagesExComponent],
  declarations: [PaginationExComponent, RatingExComponent, MessagesExComponent],
  imports: [Angular2CompsModule],
})

export class ExamplesModule { }