import { Component, ChangeDetectionStrategy, Input, OnInit, Inject } from "@angular/core";
import { Book } from "../models";
import { Store } from "@ngrx/store";
import { AppState, AppStore } from "../store";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { BookActions } from "../actions";
import { pluck } from "../utilities";

@Component({
    template: require("./book-detail-page.component.html"),
    styles: [require("./book-detail-page.component.scss")],
    selector: "book-detail-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailPageComponent implements OnInit { 
    constructor(
        private _store: AppStore,
        private _activatedRoute: ActivatedRoute,
        private _bookActions: BookActions
    ) { }

    ngOnInit() {
        this._bookActions.get();
    }

    public get entity$(): Observable<Book> { 
        return this._store.bookById$(this._activatedRoute.snapshot.params["id"]);        
    };
}
