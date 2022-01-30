import { DatePickerInnerComponent } from "ngx-bootstrap/datepicker";
import { IComment } from "./IComment.interface";

export class CommentClass implements IComment {
    Id!: number; 
    Name!: string;
    Date!: string;
    Comm!: string;
}