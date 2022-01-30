import { IProduct } from "../property/IProduct.interface";

export interface IProductDets extends IProduct {
    Brand: string;
    Model: string;
    Date: string;
    BuyLink: string;
    PostedOn: string;
}