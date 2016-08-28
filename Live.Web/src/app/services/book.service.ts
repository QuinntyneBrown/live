import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Book } from "../models";
import { Observable } from "rxjs";

@Injectable()
export class BookService {
    constructor(private _http: Http) { }

    public add(book: Book) {
        return this._http
            .post("/api/book/add", book)
            .map(data => data.json())
            .catch(err => {                
                return Observable.of(false);
            });        
    }

    public get() {
        return this._http
            .get("api/book/get")
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            }); 
    }

    public remove(options: { id: number }) {
        return this._http
            .delete(`/api/book/remove?id=${options.id}`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }
}