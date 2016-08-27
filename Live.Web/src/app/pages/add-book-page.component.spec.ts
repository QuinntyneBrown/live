import { AddBookPageComponent } from './add-book-page.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('AddBookPageComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(AddBookPageComponent).then(fixture => {
                expect(fixture.componentInstance instanceof AddBookPageComponent).toBe(true, 'should create AddBookPageComponent');
            });
        })));    
});
