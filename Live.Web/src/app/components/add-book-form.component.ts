import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";
import {
    FormGroup,
    FormControl
} from "@angular/forms";

@Component({
    template: require("./add-book-form.component.html"),
    styles: [require("./add-book-form.component.scss")],
    selector: "add-book-form",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBookFormComponent { 
    @Output() contactFormSubmitted = new EventEmitter();

    public form = new FormGroup({
        name: new FormControl()
    });

    public onSubmit = () => {
        this.contactFormSubmitted.emit({
            value: this.form.value
        });
    }
}
