import {QueryResultMapper} from '../../domain/adapters/QueryResultMapper';
import { QueryResult } from '../../domain/model/QueryResult';

const rawJSON = require('../sample/sampleAPI.json');
describe('Adapter Testing', () =>{

    it('Testing QueryResult Adapter', () => {
        const converter: QueryResultMapper = new QueryResultMapper();
        const results: QueryResult = converter.convertToDomainObj(rawJSON);
        const condition: boolean =
            (results.numberOfResult === 44 &&
                results.queryResponseTime == 102 &&
                results.Liquors.length ==10)
    
            expect(results.Liquors[9].details.productor.country).toEqual('Canada');
            expect(results.Liquors[9].details.size).toEqual('750 ml');
            expect(results.Liquors[9].price).toEqual(39.75);
            expect(results.Liquors[3].details.productor.name).toEqual('White Oak Distillery');
            expect(results.Liquors[3].details.bouchonType).toEqual('Métal vissé');
            expect(results.Liquors[3].imageURL).toEqual('http://s7d9.scene7.com/is/image/SAQ/13738354_is');

        expect(condition).toEqual(true);
    });
})

