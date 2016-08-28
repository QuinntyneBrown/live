import { Component, ChangeDetectionStrategy, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Book } from "../models";

@Component({
    template: require("./book-list.component.html"),
    styles: [require("./book-list.component.scss")],
    selector: "book-list"    
})
export class BookListComponent { 
    @Input() entities: Array<Book>;

    @Output() onDeleted: EventEmitter<{ value: Book }> = new EventEmitter <{ value: Book }>();

    @Output() onSelected: EventEmitter<{ value: Book }> = new EventEmitter<{ value: Book }>();

    public onSelect(book: Book) {
        this.onSelected.emit({
            value: book
        });
    }

    public onDelete(book: Book) {
        this.onDeleted.emit({
            value: book
        });
    }
}
