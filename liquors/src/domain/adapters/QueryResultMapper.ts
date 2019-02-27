import { baseMapper } from './baseMapper';
import { QueryResult } from "../model/QueryResult";
import { Liquor } from '../model/Liquor';
import { LiquorMapper } from './LiquorMapper';

export class QueryResultMapper extends baseMapper {
    
    public convertToDomainObj(rawJSON) : QueryResult {
        const numberOfResults : number = rawJSON.totalCount;
        const responseTime : number = rawJSON.duration;
        let liquors: Liquor[] = [];

        const liquorMapper : LiquorMapper = new LiquorMapper();
        liquors = liquorMapper.convertToDomainObj(rawJSON.results);


        const data : QueryResult =
         new QueryResult(numberOfResults, responseTime, liquors);
        return data;

    }

}