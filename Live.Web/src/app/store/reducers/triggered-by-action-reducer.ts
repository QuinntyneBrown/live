import { Action } from "@ngrx/store";
import { ADD_BOOK_SUCCESS, GET_BOOK_SUCCESS, REMOVE_BOOK_SUCCESS } from "../../actions";
import { initialState } from "../initial-state";
import { AppState } from "../app-state";
import { addOrUpdate, pluckOut } from "../../utilities";

export const triggeredByActionReducer = (state: AppState = initialState, action: Action) => {
    return Object.assign({}, state, {
        triggeredByAction: action.type,
        triggeredByActionId: (action as any).id
    });    
}