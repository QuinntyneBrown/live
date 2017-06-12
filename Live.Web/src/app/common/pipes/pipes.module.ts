import { NgModule } from '@angular/core';

import { SortBooksPipe } from './sort-books.pipe';

const declarables = [SortBooksPipe];

@NgModule({
    exports: [declarables],
    declarations: [declarables]
})
export class PipesModule { }
