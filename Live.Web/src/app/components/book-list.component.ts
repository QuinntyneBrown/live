import { Component, ChangeDetectionStrategy, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Book } from "../models";

@Component({
    template: require("./book-list.component.html"),
    styles: [require("./book-list.component.scss")],
    selector: "book-list"    
})
export class BookListComponent { 
    @Input() entities: Array<Book>;

    @Output() onDeleted: EventEmitter<any> = new EventEmitter();

    public onDelete(book: Book) {
        this.onDeleted.emit({
            value: book
        });
    }
}
