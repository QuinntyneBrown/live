import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { Book } from "../models";
import { BookActionCreator } from "../action-creators";
import { Store } from "@ngrx/store";
import { AppState } from "../store";
import { Observable } from "rxjs";

@Component({
    template: require("./home-page.component.html"),
    styles: [require("./home-page.component.scss")],
    selector: "home-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit { 
    constructor(
        private _bookActionCreator: BookActionCreator,
        private _store: Store<AppState>) {
        
    }

    ngOnInit() {
        this._bookActionCreator.get();
    }

    public get entities$(): Observable<Array<Book>> {
        return this._store.select("books")
            .map((data: { books: Array<Book> }) => {
                return data.books;
            });
    };


}
