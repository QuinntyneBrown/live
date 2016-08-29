import { Component, ChangeDetectionStrategy, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Book } from "../models";

@Component({
    template: require("./book-list.component.html"),
    styles: [require("./book-list.component.scss")],
    selector: "book-list"    
})
export class BookListComponent { 
    @Input() entities: Array<Book>;
    @Output() onDelete: EventEmitter<{ value: Book }> = new EventEmitter <{ value: Book }>();
    @Output() onSelect: EventEmitter<{ value: Book }> = new EventEmitter<{ value: Book }>();    
}
