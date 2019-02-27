import { Liquor } from "./Liquor";

export class QueryResult {
    numberOfResult: number;
    queryResponseTime: number;
    Liquors : Liquor[];

    constructor(numberOfResult: number, queryResponseTime: number, Liquors: Liquor[]){
        this.numberOfResult = numberOfResult;
        this.queryResponseTime = queryResponseTime;
        this.Liquors = Liquors;
    }

}