import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { Book } from "../../models";


@Component({
    template: require("./book-detail.component.html"),
    styles: [require("./book-detail.component.scss")],
    selector: "book-detail"
})
export class BookDetailComponent { 
    @Input() public entity: Book;
}
