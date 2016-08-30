import { SearchComponent } from './search.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('SearchComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(SearchComponent).then(fixture => {
                expect(fixture.componentInstance instanceof SearchComponent).toBe(true, 'should create SearchComponent');
            });
        })));    
});
