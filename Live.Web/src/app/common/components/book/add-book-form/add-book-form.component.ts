import {
    Component,
    ChangeDetectionStrategy,
    Input,
    Output,
    OnInit,
    EventEmitter
} from "@angular/core";

import {
    FormGroup,
    FormControl,
    Validators
} from "@angular/forms";

@Component({
    template: require("./add-book-form.component.html"),
    styles: [require("./add-book-form.component.scss")],
    selector: "add-book-form"
})
export class AddBookFormComponent implements OnInit { 
    ngOnInit() {}

    @Output() onSubmit = new EventEmitter();
    public form = new FormGroup({
        index: new FormControl(0, Validators.required),
        name: new FormControl("", [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(100)
        ]),
        purpose: new FormControl()
    });
}
