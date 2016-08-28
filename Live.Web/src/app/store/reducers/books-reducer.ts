import { Action } from "@ngrx/store";
import { ADD_BOOK_SUCCESS, GET_BOOK_SUCCESS, REMOVE_BOOK_SUCCESS } from "../../actions";
import { initialState } from "../initial-state";
import { AppState } from "../app-state";
import { addOrUpdate, pluckOut } from "../../utilities";
import { Book } from "../../models";

export const booksReducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case ADD_BOOK_SUCCESS:
            var entities: Array<Book> = state.books;
            var entity: Book = action.payload;
            addOrUpdate({ items: entities, item: entity});            
            return Object.assign({}, state, { books: entities});

        case GET_BOOK_SUCCESS:
            var entities: Array<Book> = state.books;
            var newOrExistingBooks: Array<Book> = action.payload;
            for (let i = 0; i < newOrExistingBooks.length; i++) {
                addOrUpdate({ items: entities, item: newOrExistingBooks[i] });
            }                                    
            return Object.assign({}, state, { books: entities });

        case REMOVE_BOOK_SUCCESS:
            var entities: Array<Book> = state.books;
            var id = action.payload;
            pluckOut({ value: id, items: entities });
            return Object.assign({}, state, { books: entities });

        default:
            return state;
    }
}