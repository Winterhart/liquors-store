import { LiquorDetails } from "./LiquorDetails";

export class Liquor {
    name : string;
    url: string;
    imageURL: string;
    price : number;
    details : LiquorDetails;

    constructor(name: string, url: string, imageURL: string, price: number, details: LiquorDetails ){
        this.name = name;
        this.url = url;
        this.imageURL = imageURL;
        this.price = price;
        this.details = details;
    }
}