import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { BookActions } from "../actions"
import { Book } from "../models";
import { ADD_BOOK_SUCCESS } from "../constants";
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
        private _bookActions: BookActions,
        private _store: AppStore,
        private _router: Router
    ) { }

    ngOnInit() {
        this._store.select("books")
            .subscribe((data: { books: Array<Book> }) => {
                if (this.addId && this._store.lastTriggeredActionId == this.addId) {
                    this._router.navigate(["/home"]);
                }
            });
    }

    public onSubmit(form: { value: Book }) {        
        this.addId = this._bookActions.add(form.value);
    }
    
    public addId: string = null;
}
