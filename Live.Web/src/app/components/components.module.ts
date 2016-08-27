import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';

const declarables = [BookDetailComponent, BookListComponent];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables]
})
export class ComponentsModule { }
