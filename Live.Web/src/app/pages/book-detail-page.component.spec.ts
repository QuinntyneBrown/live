import { BookDetailPageComponent } from './book-detail-page.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('BookDetailPageComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(BookDetailPageComponent).then(fixture => {
                expect(fixture.componentInstance instanceof BookDetailPageComponent).toBe(true, 'should create BookDetailPageComponent');
            });
        })));    
});
