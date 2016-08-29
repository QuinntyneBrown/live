import { Book } from "../models";

export interface AppState {
    books: Array<Book>;
    triggeredByAction?: {
        triggeredByActionId?: string;
        triggeredByAction?: string;
    };
}