import { NgModule } from '@angular/core';
import { ActionReducer, Action, combineReducers, provideStore } from '@ngrx/store';
import { compose } from "@ngrx/core/compose";
import { localStorageSync } from "ngrx-store-localstorage";
import { booksReducer, triggeredByActionReducer, triggeredByActionIdReducer } from "./reducers";
import { AppStore } from "./services";

const providers = [
    AppStore,
    provideStore({
        books: booksReducer
    })
];

@NgModule({
	providers: providers
})
export class StoreModule { }
