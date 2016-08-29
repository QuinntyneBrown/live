import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { Book } from "../models";
import { BookActionCreator } from "../action-creators";
import { Store } from "@ngrx/store";
import { AppState, AppStore } from "../store";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
    template: require("./home-page.component.html"),
    styles: [require("./home-page.component.scss")],
    selector: "home-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit { 
    constructor(
        private _bookActionCreator: BookActionCreator,
        private _router: Router,
        private _store: AppStore) { }

    ngOnInit() {
        this._bookActionCreator.get();
    }

    public onDeleted($event: { value: Book }) {
        this._bookActionCreator.remove({ id: $event.value.id });
    }

    public onSelected($event: { value: Book }) {
        this._router.navigate(['/book', $event.value.id]);
    }

    public get entities$(): Observable<Array<Book>> {
        return this._store.books$();
    };    
}
