import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ServicesModule } from "../services";

import { BookActionCreator } from './book.action-creator';

const providers = [BookActionCreator];

@NgModule({
    imports: [ServicesModule],
	providers: providers
})
export class ActionCreatorsModule { }
