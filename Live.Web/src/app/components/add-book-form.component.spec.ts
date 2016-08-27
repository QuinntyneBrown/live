import { AddBookFormComponent } from './add-book-form.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('AddBookFormComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(AddBookFormComponent).then(fixture => {
                expect(fixture.componentInstance instanceof AddBookFormComponent).toBe(true, 'should create AddBookFormComponent');
            });
        })));    
});
