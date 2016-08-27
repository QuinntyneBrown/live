import { Part } from "./part.model";
import { Author } from "./author.model";
import { Theme } from "./theme.model";

export class Book {
    public id: number = 0;
    public name: string;
    public writtenFromDate: string;
    public writtenEndDate: string;
    public part: Part;
    public authors: Array<Author> = [];
    public themes: Array<Theme> = [];
     
}