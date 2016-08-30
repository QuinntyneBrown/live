import { Component, ChangeDetectionStrategy, Output, OnInit, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    template: require("./search.component.html"),
    styles: [require("./search.component.scss")],
    selector: "search"
})
export class SearchComponent implements OnInit { 
    searchControl = new FormControl();
    @Output() public onSearch: EventEmitter<{ value: string }> = new EventEmitter<{ value: string }>();
    ngOnInit() {
        this.searchControl.valueChanges
            .filter((value, index) => { return value.length > 2; })
            .debounceTime(100)
            .distinctUntilChanged()
            .subscribe((value) => {
                this.onSearch.emit({ value: value });
            });
    }
}
