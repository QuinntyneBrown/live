import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from "../pipes";

import {
    AddBookFormComponent,
    BookListComponent,
    BookDetailComponent,
    DropDownComponent,
    NavComponent,

    BackdropService,
    ModalService
} from './';

const declarables = [
    AddBookFormComponent,
    BookDetailComponent,
    BookListComponent,
    DropDownComponent,
    NavComponent
];

export const providers = [BackdropService, ModalService];

@NgModule({
    imports: [PipesModule, CommonModule, RouterModule, ReactiveFormsModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class ComponentsModule { }
