import { EventEmitter } from 'events';
import {LiquorsFinder } from '../../data-source/services/LiquorsFinder'
import {QueryResultMapper} from '../adapters/QueryResultMapper'
import { QueryResult } from '../model/QueryResult'

export class GetLiquorsEvent extends EventEmitter {
    public gatherLiquors(state , props) : void{
        const finder: LiquorsFinder = new LiquorsFinder();
        const adapter: QueryResultMapper = new
            QueryResultMapper();
        finder.findLiquors(state).then(res => {
            const queryResult: QueryResult = adapter.convertToDomainObj(res.data);
            props.callBack(queryResult);
        });
    }
}