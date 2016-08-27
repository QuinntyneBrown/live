import { Routes, RouterModule } from '@angular/router';

import {
    AddBookPageComponent,
    HomePageComponent,
    BookDetailPageComponent,
    NotFoundPageComponent
} from "../pages";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'book/add',
        component: AddBookPageComponent
    },
    {
        path: 'book/:id',
        component: BookDetailPageComponent
    }
];

export const RoutingModule = RouterModule.forRoot([...routes, ...routes]);
