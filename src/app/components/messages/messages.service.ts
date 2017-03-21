import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class MessagesService {

    constructor() { }

    @Output() messageChanged: EventEmitter<any> = new EventEmitter();

    SetMessage(message: string, cssclass: string) {
        this.messageChanged.emit({ message, cssclass });
    }
}