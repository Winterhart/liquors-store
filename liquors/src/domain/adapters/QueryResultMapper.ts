import { baseMapper } from './baseMapper';
import { QueryResult } from "../model/QueryResult";
import { Liquor } from '../model/Liquor';

export class QueryResultMapper extends baseMapper {
    
    public convertToDomainObj(rawJSON) : QueryResult {
        const numberOfResults : number = rawJSON.totalCount;
        const responseTime : number = rawJSON.duration;
        const liquors : Liquor[] = [];
        const data : QueryResult =
         new QueryResult(numberOfResults, responseTime, liquors);
        return data;

    }

}