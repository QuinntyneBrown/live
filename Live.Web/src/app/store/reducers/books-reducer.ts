import { Action } from "@ngrx/store";
import { ADD_BOOK_SUCCESS } from "../../actions";
import { initialState } from "../initial-state";
import { AppState } from "../app-state";
import { addOrUpdate } from "../../utilities";

export const booksReducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case ADD_BOOK_SUCCESS:
            let entities = state.books;
            let entity = action.payload;
            addOrUpdate({ items: entities, item: entity});            
            return Object.assign({}, state, { books: entities});

        default:
            return state;
    }
}