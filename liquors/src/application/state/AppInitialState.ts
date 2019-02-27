import { QueryResult } from "../../domain/model/QueryResult";

export class ApplicationInitialState  {

    query: QueryResult;

    constructor(){
        this.query = new QueryResult(0, 0, []);
    }
}