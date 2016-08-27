import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import "./rxjs-extensions";

import { ActionCreatorsModule } from "./action-creators";
import { ComponentsModule } from "./components";
import { RoutingModule } from "./routing";
import { ServicesModule } from "./services";

const declarables = [AppComponent]

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,

        ActionCreatorsModule,
        ComponentsModule,
        RoutingModule,
        ServicesModule
    ],
    declarations: [declarables],
    exports: [declarables],
    bootstrap:[AppComponent]
})
export class AppModule { }

