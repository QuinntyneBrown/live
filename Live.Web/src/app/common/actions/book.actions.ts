import { Store } from "@ngrx/store";
import { BookService } from "../services";
import { AppState, AppStore } from "../reducers";
import { ADD_BOOK_SUCCESS, GET_BOOK_SUCCESS, REMOVE_BOOK_SUCCESS } from "../constants";
import { Book } from "../models";
import { Observable } from "rxjs";
import { guid } from "../utilities";

export class BookActions {
    constructor(private _bookService: BookService, private _store: AppStore) { }

    public add(book: Book) {
        const newGuid = guid();
        this._bookService.add(book)
            .subscribe(book => {
                this._store.dispatch({
                    type: ADD_BOOK_SUCCESS,
                    payload: book
                },newGuid);                
            });
        return newGuid;
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

    public getById(options: { id: number }) {
        return this._bookService.getById({ id: options.id })
            .subscribe(book => {
                this._store.dispatch({
                    type: GET_BOOK_SUCCESS,
                    payload: [book]
                });
                return true;
            });
    }

    //public search(options) {
    //    return this._bookService.search({ value: options.value })
    //        .subscribe(book => {
    //            this._store.dispatch({
    //                type: SEARCH_BOOK_SUCCESS,
    //                payload: options.id
    //            });
    //            return true;
    //        });
    //}
}