import { NavComponent } from './nav.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('NavComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(NavComponent).then(fixture => {
                expect(fixture.componentInstance instanceof NavComponent).toBe(true, 'should create NavComponent');
            });
        })));    
});
