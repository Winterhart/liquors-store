import { LiquorProductor } from "./LiquorProductor";

export class LiquorDetails {
    bouchonType: string;
    category: string;
    color: string;
    size : string;
    averagePrice : string;
    productor: LiquorProductor;
    score : number;
    available: string;


    constructor(bouchonType: string, category: string, color: string,
         size: string, averagePrice: string, productor: LiquorProductor,
         score : number, available: string){

            this.bouchonType = bouchonType;
            this.category = category;
            this.color = color;
            this.size = size;
            this.averagePrice = averagePrice;
            this.productor = productor;
            this.score =score;
            this.available = available;

         }

    
}