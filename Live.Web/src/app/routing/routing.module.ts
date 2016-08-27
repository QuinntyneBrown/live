import { Routes, RouterModule } from '@angular/router';

import {
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
    }
];

export const RoutingModule = RouterModule.forRoot([...routes, ...routes]);
