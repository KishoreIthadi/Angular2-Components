import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PaginationExComponent } from './paginationEx/paginationEx.component';
import { RatingExComponent } from './ratingEx/ratingEx.component';
import { MessagesExComponent } from './messagesEx/messagesEx.component';

import { ComponentsModule } from '.././components/components.module';

@NgModule({
  exports: [PaginationExComponent, RatingExComponent, MessagesExComponent],
  declarations: [PaginationExComponent, RatingExComponent, MessagesExComponent],
  imports: [ComponentsModule],
})

export class ExamplesModule { }