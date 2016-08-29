import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { BookActionCreator } from "../action-creators"
import { Book } from "../models";
import { ADD_BOOK_SUCCESS } from "../actions";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState, AppStore } from "../store";
import { pluck } from "../utilities";

@Component({
    template: require("./add-book-page.component.html"),
    styles: [require("./add-book-page.component.scss")],
    selector: "add-book-page",
    changeDetection: ChangeDetectionStrategy.OnPush,
    
})
export class AddBookPageComponent implements OnInit { 
    constructor(
        private _bookActionCreator: BookActionCreator,
        private _store: AppStore,
        private _router: Router
    ) { }

    ngOnInit() {
        this._store.select("books")
            .subscribe((data: { books: Array<Book> }) => {
                if (this.addBookActionId && this._store.lastTriggeredActionId == this.addBookActionId) {
                    this._router.navigate(["/home"]);
                }
            });
    }

    public onSubmit(form: { value: Book }) {        
        this.addBookActionId = this._bookActionCreator.add(form.value);
    }
    
    public addBookActionId: string = null;
}
