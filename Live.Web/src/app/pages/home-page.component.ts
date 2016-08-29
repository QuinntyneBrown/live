import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { Book } from "../models";
import { BookActions } from "../actions";
import { Store } from "@ngrx/store";
import { AppState, AppStore } from "../store";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
    template: require("./home-page.component.html"),
    styles: [require("./home-page.component.scss")],
    selector: "home-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit { 
    constructor(
        private _bookActions: BookActions,
        private _router: Router,
        private _store: AppStore) { }
    ngOnInit() { this._bookActions.get(); }      
}
