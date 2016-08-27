import { NgModule } from '@angular/core';
import { provideStore } from "@ngrx/store";
import { booksReducer } from "./reducers";

const providers = [
    provideStore({ books: booksReducer })
];

@NgModule({
	providers: providers
})
export class StoreModule { }
