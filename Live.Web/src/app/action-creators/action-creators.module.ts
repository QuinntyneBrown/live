import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { BookActionCreator } from './book.action-creator';

const providers = [BookActionCreator];

@NgModule({
	providers: providers
})
export class ActionCreatorsModule { }
