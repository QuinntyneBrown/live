import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./nav.component.html"),
    styles: [require("./nav.component.scss")],
    selector: "nav",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit { 
    ngOnInit() {

    }
}
