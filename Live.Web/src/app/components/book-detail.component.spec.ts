import { BookDetailComponent } from './book-detail.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('BookDetailComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(BookDetailComponent).then(fixture => {
                expect(fixture.componentInstance instanceof BookDetailComponent).toBe(true, 'should create BookDetailComponent');
            });
        })));    
});
