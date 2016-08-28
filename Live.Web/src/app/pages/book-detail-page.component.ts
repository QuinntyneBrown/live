import { Component, ChangeDetectionStrategy, Input, OnInit, Inject } from "@angular/core";
import { Book } from "../models";
import { Store } from "@ngrx/store";
import { AppState } from "../store";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { BookActionCreator } from "../action-creators";

@Component({
    template: require("./book-detail-page.component.html"),
    styles: [require("./book-detail-page.component.scss")],
    selector: "book-detail-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailPageComponent implements OnInit { 
    constructor(
        private _store: Store<AppState>,
        private _route: ActivatedRoute,
        private _bookActionCreator: BookActionCreator
    ) {
        
    }

    ngOnInit() {
        this._bookActionCreator.get();
    }

    public get entity$(): Observable<Book> {        
        return this._store.select("books")
            .map((data: { books: Array<Book> }) => {                
                return data.books.filter(b => b.id == this._route.snapshot.params["id"])[0];
            });
        
    };
}
