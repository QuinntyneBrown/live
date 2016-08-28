import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { BookService } from "../services";
import { AppState } from "../store";
import { ADD_BOOK_SUCCESS } from "../actions";
import { Book } from "../models";
import { Observable } from "rxjs";

@Injectable()
export class BookActionCreator {
    constructor(private _bookService: BookService, private _store: Store<AppState>) { }

    public add(book: Book): Observable<boolean> {
        return this._bookService.add(book)
            .map(book => {
                this._store.dispatch({
                    type: ADD_BOOK_SUCCESS,
                    payload: book
                });
                return true;
            });
    }
}