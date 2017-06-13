import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router';
import { HttpModule } from '@angular/http';

import "./rxjs-extensions";

import { AppComponent } from './app.component';

import {

} from "./common";


const declarables = [
    AppComponent,
    ...routedComponents
];

@NgModule({
    imports: [        
        BrowserModule,
        HttpModule,
        CommonModule,
        RouterModule,

        ActionsModule,
        ComponentsModule,
        PipesModule,
        RoutingModule,
        ServicesModule,
        StoreModule        
    ],
    declarations: [declarables],
    exports: [declarables],
    bootstrap:[AppComponent]
})
export class AppModule { }

