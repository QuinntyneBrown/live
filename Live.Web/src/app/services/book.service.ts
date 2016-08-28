import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Book } from "../models";
import { Observable } from "rxjs";

@Injectable()
export class BookService {
    constructor(private _http: Http) { }

    public add(book: Book) {
        //return this._http
        //    .post("/api/book/add", book)
        //    .map(data => data.json())
        //    .catch(err => {
        //        alert("error!");
        //        return Observable.of(false);
        //    });

        return this._http.get(`/api/book/get`)
            .map((data) => data.json())
            .catch(this.handleError);
    }

    public get() {
        return this._http
            .get("api/book/get")
            .map(data => data.json());
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}