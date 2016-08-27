import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { Book } from "../models";

@Component({
    template: require("./book-detail-page.component.html"),
    styles: [require("./book-detail-page.component.scss")],
    selector: "book-detail-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailPageComponent implements OnInit { 
    ngOnInit() {

    }

    public entity: Book = null;
}
