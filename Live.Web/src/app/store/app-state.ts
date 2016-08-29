import { Book } from "../models";

export interface AppState {
    books: Array<Book>;
    triggeredByActionId?: string;
    triggeredByAction?: string;
}