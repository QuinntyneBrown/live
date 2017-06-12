import { NgModule } from '@angular/core';

import { BookActions } from './book.actions';

const providers = [BookActions];

@NgModule({
	providers: providers
})
export class ActionsModule { }
