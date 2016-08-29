import { NgModule } from '@angular/core';
import { ActionReducer, Action, combineReducers, provideStore } from '@ngrx/store';
import { compose } from "@ngrx/core/compose";
import { localStorageSync } from "ngrx-store-localstorage";
import { booksReducer, triggeredByActionReducer } from "./reducers";

const providers = [
    provideStore(
        compose(
            localStorageSync(['books'],true),
            combineReducers
        )({
            books: booksReducer,
            triggeredByAction: triggeredByActionReducer
        })
    )
];

@NgModule({
	providers: providers
})
export class StoreModule { }
