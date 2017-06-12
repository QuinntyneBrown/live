import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { BookService } from "./book.service";

const providers = [BookService];

@NgModule({
    imports: [CommonModule, HttpModule],
	providers: providers
})
export class ServicesModule { }
