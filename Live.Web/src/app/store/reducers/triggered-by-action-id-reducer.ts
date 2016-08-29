import { Action } from "@ngrx/store";
import { initialState } from "../initial-state";
import { AppState } from "../app-state";
import { ADD_BOOK_SUCCESS, GET_BOOK_SUCCESS, REMOVE_BOOK_SUCCESS } from "../../actions";

export const triggeredByActionIdReducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case ADD_BOOK_SUCCESS:
            return Object.assign({}, state, { triggeredByActionId: (action as any).id });

        case GET_BOOK_SUCCESS:
            return Object.assign({}, state, { triggeredByActionId: (action as any).id });

        case REMOVE_BOOK_SUCCESS:
            return Object.assign({}, state, { triggeredByActionId: (action as any).id });

        default:
            return state;
    }

}