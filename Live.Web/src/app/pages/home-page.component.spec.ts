import { HomePageComponent } from './home-page.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('HomePageComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(HomePageComponent).then(fixture => {
                expect(fixture.componentInstance instanceof HomePageComponent).toBe(true, 'should create HomePageComponent');
            });
        })));    
});
