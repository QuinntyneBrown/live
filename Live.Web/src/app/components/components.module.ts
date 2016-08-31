import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from "../pipes";

import {
    AddBookFormComponent,
    BookListComponent,
    BookDetailComponent,
    NavComponent,

    ModalService
} from './';

const declarables = [
    AddBookFormComponent,
    BookDetailComponent,
    BookListComponent,
    NavComponent
];

export const providers = [ModalService];

@NgModule({
    imports: [PipesModule, CommonModule, RouterModule, ReactiveFormsModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class ComponentsModule { }
