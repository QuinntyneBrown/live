import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./add-book-page.component.html"),
    styles: [require("./add-book-page.component.scss")],
    selector: "add-book-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBookPageComponent implements OnInit { 
    ngOnInit() {

    }
}
