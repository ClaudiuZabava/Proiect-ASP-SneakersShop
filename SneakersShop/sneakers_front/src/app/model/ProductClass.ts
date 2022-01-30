import { DatePickerInnerComponent } from "ngx-bootstrap/datepicker";
import { IProductDets } from "./IProductDets.interface";

export class ProductClass implements IProductDets {
    Brand!: string;
    Model!: string;
    Date!: string;
    BuyLink!: string;
    PostedOn!: string
    Id!: number | null;
    Name!: string;
    Type!: string;
    Price!: string;
    Image?: string | undefined;

    
}