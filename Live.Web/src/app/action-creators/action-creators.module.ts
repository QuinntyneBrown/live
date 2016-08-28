import { NgModule } from '@angular/core';

import { BookActionCreator } from './book.action-creator';

const providers = [BookActionCreator];

@NgModule({
	providers: providers
})
export class ActionCreatorsModule { }
