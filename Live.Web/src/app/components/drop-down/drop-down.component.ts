import { Component, ChangeDetectionStrategy, Output, Input, EventEmitter } from "@angular/core";
import { DropDownElement } from "./drop-down-element";

@Component({
    template: require("./drop-down.component.html"),
    styles: [require("./drop-down.component.scss")],
    selector: "drop-down"
})
export class DropDownComponent<T> {      
    @Input() public placeholder: string;
    @Input() public disabled: string;
    @Input("resetOnChange") set resetOnChange(value) { delete this.selectedElement; }

    @Input("options") set options(value: DropDownElement<T>[]) {
        this._options = [];
        for (let i = 0; i < value.length; i++) {
            this._options.push({
                id: i,
                displayLabel: value[i].displayLabel,
                value: value[i].value,
                default: value[i].default
            });
        }
        // If there is only 1, auto-select it
        if (this._options.find(d => d.default)) {
            this.onSelect(this._options.find(d => d.default).id.toString());
        } else if (this._options.length > 0) {
            this.onSelect(this._options[0].id.toString());
        } else if (this._options.length === 0) {
            delete this.selectedElement;
        }
    }

    

    @Output() public value: EventEmitter<T> = new EventEmitter<T>();
    private _options: DropDownElement<T>[];
    public selectedElement: DropDownElement<T>;

    set selectedValue(value: T) {
        if ((this.selectedElement.value !== value) && (value)) {
            this.onSelectValue(value);
        }
    }

    onSelect(id: string) {
        const element = this._options.find(e => e.id.toString() === id);
        this.selectedElement = element;
        this.value.emit(element.value);
    }

    onSelectValue(value: T) {
        const element = this._options.find(e => e.value === value);
        this.selectedElement = element;
        this.value.emit(element.value);
    }
}
