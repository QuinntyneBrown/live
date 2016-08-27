import { BookListComponent } from './book-list.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('BookListComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(BookListComponent).then(fixture => {
                expect(fixture.componentInstance instanceof BookListComponent).toBe(true, 'should create BookListComponent');
            });
        })));    
});
