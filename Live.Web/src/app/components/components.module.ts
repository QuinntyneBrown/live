import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from "../pipes";

import {
    AddBookFormComponent,
    BookListComponent,
    BookDetailComponent,
    NavComponent
} from './';

const declarables = [
    AddBookFormComponent,
    BookDetailComponent,
    BookListComponent,
    NavComponent
];

@NgModule({
    imports: [PipesModule, CommonModule, RouterModule, ReactiveFormsModule],
    exports: [declarables],
    declarations: [declarables]
})
export class ComponentsModule { }
