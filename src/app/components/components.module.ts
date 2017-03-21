import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PaginationComponent } from './pagination/pagination.component';
import { RatingComponent } from './rating/rating.component';
import { MessagesComponent } from './messages/messages.component'
import { MessagesService } from './messages/messages.service'

@NgModule({
  exports: [PaginationComponent, RatingComponent, MessagesComponent],
  declarations: [PaginationComponent, RatingComponent, MessagesComponent],
  imports: [BrowserModule],
  providers: [MessagesService]
})

export class ComponentsModule { }