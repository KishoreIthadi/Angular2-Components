import { Ng2StateDeclaration } from "ui-router-ng2";

import { RatingExComponent } from '.././examples/ratingEx/ratingEx.component';
import { PaginationExComponent } from '.././examples/paginationEx/paginationEx.component';
import { MessagesExComponent } from '.././examples/messagesEx/messagesEx.component';

export let MAIN_STATES: Ng2StateDeclaration[] = [
    {
        name: 'home',
        url: '/',
        component: PaginationExComponent
    },
    {
        name: 'rating',
        url: '/rating/',
        component: RatingExComponent
    },
    {
        name: 'pagination',
        url: '/pagination',
        component: PaginationExComponent
    },
    {
        name: 'messages',
        url: '/messages',
        component: MessagesExComponent
    }
];