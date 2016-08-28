import { Pipe, PipeTransform } from '@angular/core';

import { Book } from '../models';

@Pipe({ name: 'sortBooks' })
export class SortBooksPipe implements PipeTransform {
    transform(value: Book[], args?: any[]) {        
        if (!value || !value.sort) { return value; }
        
        return value.sort((a: Book, b: Book) => {
            if (a.index > b.index) { return 1; }
            return 0;
        });
    }
}