import { Component, OnInit } from '@angular/core';

import { MessagesService } from '../../components/messages/messages.service';

@Component({
  moduleId: module.id.replace('jscode', 'app'),
  templateUrl: 'messagesEx.component.html'
})
export class MessagesExComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
  }

  successClick() {
    this.messagesService.SetMessage("Success Message", "messages_success");
  }

  warningClick() {
    this.messagesService.SetMessage("Warning Message", "messages_warning");
  }

  dangerClick() {
    this.messagesService.SetMessage("Danger Message", "messages_danger");
  }

  infoClick() {
    this.messagesService.SetMessage("Info Message", "messages_info");
  }
}