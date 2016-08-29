import { Component, ChangeDetectionStrategy } from "@angular/core";
import { BookActionCreator } from "../action-creators"
import { Book } from "../models";
import { ADD_BOOK_SUCCESS } from "../actions";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../store";
import { pluck } from "../utilities";

@Component({
    template: require("./add-book-page.component.html"),
    styles: [require("./add-book-page.component.scss")],
    selector: "add-book-page",
    changeDetection: ChangeDetectionStrategy.OnPush,
    
})
export class AddBookPageComponent { 
    constructor(
        private _bookActionCreator: BookActionCreator,
        private _store: Store<AppState>,
        private _router: Router
    ) {
        _store.select("books")
            .subscribe((data: { books: Array<Book> }) => {   
                if (this.addBookActionId && this.currentState.triggeredByAction.triggeredByActionId == this.addBookActionId) {
                    this._router.navigate(["/home"]);
                }
            });
    }
    public onSubmitted(form: { value: Book }) {        
        this.addBookActionId = this._bookActionCreator.add(form.value);
    }

    public get currentState(): AppState {
        let state: AppState;
        this._store.take(1).subscribe(s => state = s);
        return state;
    };

    public addBookActionId: string = null;
}
