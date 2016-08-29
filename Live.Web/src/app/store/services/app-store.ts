import { Injectable } from "@angular/core";
import { Store, Action } from "@ngrx/store";
import { AppState } from "../app-state";
import { guid } from "../../utilities";
import { select, SelectSignature } from '@ngrx/core/operator/select';


@Injectable()
export class AppStore {
    constructor(private _store: Store<AppState>) { }

    public dispatch(action: Action, newGuid?: string): string {
        newGuid = newGuid || guid();
        this.lastTriggeredAction = action.type;
        this.lastTriggeredActionId = newGuid;
        this._store.dispatch(action);        
        return newGuid;
    }

    select: SelectSignature<AppState> = select.bind(this._store);
    
    public lastTriggeredAction: string = null;

    public lastTriggeredActionId: string = null;    
}

