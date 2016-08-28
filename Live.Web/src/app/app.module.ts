import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import "./rxjs-extensions";

import { ActionCreatorsModule } from "./action-creators";
import { ComponentsModule } from "./components";
import { RoutingModule } from "./routing";
import { ServicesModule } from "./services";
import { StoreModule } from "./store";

import {
    HomePageComponent,
    AddBookPageComponent,
    BookDetailPageComponent,
    NotFoundPageComponent
} from "./pages";

const declarables = [AppComponent, HomePageComponent, AddBookPageComponent, BookDetailPageComponent, NotFoundPageComponent];

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        CommonModule,
        RouterModule,

        ActionCreatorsModule,
        ComponentsModule,
        RoutingModule,
        ServicesModule,
        StoreModule
    ],
    declarations: [declarables],
    exports: [declarables],
    bootstrap:[AppComponent]
})
export class AppModule { }

