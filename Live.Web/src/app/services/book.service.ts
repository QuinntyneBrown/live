import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class BookService {
    constructor(private _http: Http) {

    }
}