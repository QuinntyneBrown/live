import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { BookService } from "../services";
import { AppState } from "../store";
import { ADD_BOOK_SUCCESS, GET_BOOK_SUCCESS, REMOVE_BOOK_SUCCESS } from "../actions";
import { Book } from "../models";
import { Observable } from "rxjs";

@Injectable()
export class BookActionCreator {
    constructor(private _bookService: BookService, private _store: Store<AppState>) { }

    public add(book: Book) {
        return this._bookService.add(book)
            .subscribe(book => {
                this._store.dispatch({
                    type: ADD_BOOK_SUCCESS,
                    payload: book
                });
                return true;
            });
    }

    public get() {                          
        return this._bookService.get()
            .subscribe(books => {
                this._store.dispatch({
                    type: GET_BOOK_SUCCESS,
                    payload: books
                });
                return true;
            });
    }

    public remove(options: {id: number}) {
        return this._bookService.remove({ id: options.id })
            .subscribe(book => {
                this._store.dispatch({
                    type: REMOVE_BOOK_SUCCESS,
                    payload: options.id
                });
                return true;
            });
    }
}