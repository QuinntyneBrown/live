import { NotFoundPageComponent } from './not-found-page.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('NotFoundPageComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(NotFoundPageComponent).then(fixture => {
                expect(fixture.componentInstance instanceof NotFoundPageComponent).toBe(true, 'should create NotFoundPageComponent');
            });
        })));    
});
