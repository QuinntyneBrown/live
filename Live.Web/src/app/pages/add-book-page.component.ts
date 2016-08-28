import { Component, ChangeDetectionStrategy } from "@angular/core";
import { BookActionCreator } from "../action-creators"
import { Book } from "../models";
import { ADD_BOOK_SUCCESS } from "../actions";
import { Actions, Effect } from '@ngrx/effects';
//import { Router } from "@angular/router";

@Component({
    template: require("./add-book-page.component.html"),
    styles: [require("./add-book-page.component.scss")],
    selector: "add-book-page",
    changeDetection: ChangeDetectionStrategy.OnPush,
    
})
export class AddBookPageComponent { 
    constructor(
        private _bookActionCreator: BookActionCreator,
        private _actions$: Actions
    ) { }

    @Effect() bookAddSuccess$ = this._actions$
        .ofType(ADD_BOOK_SUCCESS)
        .map(() => {
            //Bug: Bootstrap at least one component before injecting Router
            //this._router.navigate(['/home']
            window.location.href = "/";
        });

    public onSubmitted(form: { value: Book }) {        
        this._bookActionCreator.add(form.value);
    }
}
