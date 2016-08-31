import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { BookActions } from "../actions";
import { Book } from "../models";
import { Observable } from "rxjs";
import { AppState, AppStore } from "../store";

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
        private _store: AppStore
    ) { }
    ngOnInit() {
        this._bookActions.get();
    }  
}
