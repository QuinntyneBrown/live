import {
    Component,
    ChangeDetectionStrategy,
    Input,
    Output,
    EventEmitter
} from "@angular/core";

import {
    FormGroup,
    FormControl
} from "@angular/forms";


@Component({
    template: require("./add-book-form.component.html"),
    styles: [require("./add-book-form.component.scss")],
    selector: "add-book-form"
})
export class AddBookFormComponent { 
    @Output() onSubmitted = new EventEmitter();

    public form = new FormGroup({
        index: new FormControl(),
        name: new FormControl(),
        purpose: new FormControl()
    });

    public onSubmit = () => {
        this.onSubmitted.emit({
            value: this.form.value
        });
    }
}
