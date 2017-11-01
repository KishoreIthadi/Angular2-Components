import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.service'

@Component({
    moduleId: module.id.replace('jscode', 'app'),
    selector: 'messages',
    templateUrl: 'messages.component.html',
    styleUrls: ['messages.component.css']
})
export class MessagesComponent implements OnInit {
    constructor(private messagesService: MessagesService) { }

    ngOnInit() {
        this.messagesService
            .messageChanged
            .subscribe(
            (response: any) => {
                this.cssclass = response.cssclass == "" ? "messages_success" : response.cssclass;
                this.message = response.message;
                this.displayclass = "displayblock";
            });
    }

    cssclass: string = "messages_success";
    message: string = "test";
    displayclass: string = "displaynone";

    MessageClose() {
        this.displayclass = "displaynone";
    }
}