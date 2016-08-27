import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./home-page.component.html"),
    styles: [require("./home-page.component.scss")],
    selector: "h-home-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit { 
    ngOnInit() {

    }
}
