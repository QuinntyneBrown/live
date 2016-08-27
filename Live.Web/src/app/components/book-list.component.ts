import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { Book } from "../models";

@Component({
    template: require("./book-list.component.html"),
    styles: [require("./book-list.component.scss")],
    selector: "book-list",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent { 
    @Input() entities: Array<Book> = [];
}
