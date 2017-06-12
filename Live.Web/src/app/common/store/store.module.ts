import { NgModule } from '@angular/core';
import * as ngrxStore from '@ngrx/store';
import { compose } from "@ngrx/core/compose";
import { localStorageSync } from "ngrx-store-localstorage";
import { booksReducer } from "./reducers";
import { AppStore } from "./services";
import { initialState } from "./initial-state";

const providers = [
    AppStore    
];

@NgModule({
    imports: [
        ngrxStore.StoreModule.provideStore(
            { books: booksReducer },
            [initialState]
        )],
    providers: providers
})
export class StoreModule { }
