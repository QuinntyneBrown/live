import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

const declarables = [AppComponent]

@NgModule({
    imports: [],
    declarations: [declarables],
	exports: [declarables]
})
export class AppModule { }

