import { Injectable } from "@angular/core";
import { Store, Action } from "@ngrx/store";
import { AppState } from "../app-state";
import { guid, pluck } from "../../utilities";
import { select, SelectSignature } from '@ngrx/core/operator/select';
import { Observable } from "rxjs";
import { Book } from "../../models";


@Injectable()
export class AppStore {
    constructor(private _store: Store<AppState>) { }

    public dispatch(action: Action, newGuid?: string): string {
        newGuid = this._registerLastAction(action.type, newGuid);
        this._store.dispatch(action);          
        return newGuid;
    }

    private _registerLastAction(actionType:string,newGuid?: string):string {
        newGuid = newGuid || guid();
        this.lastTriggeredAction = actionType;
        this.lastTriggeredActionId = newGuid;        
        return newGuid;
    }

    select: SelectSignature<AppState> = select.bind(this._store);
    
    public lastTriggeredAction: string = null;

    public lastTriggeredActionId: string = null;    

    public getState(): AppState {
        let state: AppState;
        this._store.take(1).subscribe(s => state = s);
        return state;
    }

    public bookById$(id: string): Observable<Book> {
        return this._store.select("books")
            .map((data: { books: Array<Book> }) => {
                return pluck({ value: id, items: data.books }) as Book;
            })
    }

    public books$(): Observable<Array<Book>> {
        return this._store.select("books")
            .map((data: { books: Array<Book> }) => {
                return data.books;
            });
    }
}

