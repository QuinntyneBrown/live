import { Component, ChangeDetectionStrategy } from "@angular/core";
import { BookActionCreator } from "../action-creators"
import { Book } from "../models";

@Component({
    template: require("./add-book-page.component.html"),
    styles: [require("./add-book-page.component.scss")],
    selector: "add-book-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBookPageComponent { 
    constructor(private _bookActionCreator: BookActionCreator) { }

    public onSubmitted(form: { value: Book }) {        
        this._bookActionCreator.add(form.value);
    }
}
