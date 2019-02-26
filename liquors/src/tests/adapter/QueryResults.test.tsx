import {QueryResultMapper} from '../../domain/adapters/QueryResultMapper';
import { QueryResult } from '../../domain/model/QueryResult';
import { Liquor } from '../../domain/model/Liquor';
import { LiquorDetails } from '../../domain/model/LiquorDetails';
import { LiquorProductor } from '../../domain/model/LiquorProductor';

const rawJSON = require('../sample/sampleAPI.json');
describe('Adapter Testing', () =>{

    it('Testing QueryResult Adapter', () => {
        const converter: QueryResultMapper = new QueryResultMapper();
        const results: QueryResult = converter.convertToDomainObj(rawJSON);
        debugger;
        const condition: boolean =
            (results.numberOfResult === 44 &&
                results.queryResponseTime == 102 &&
                results.Liquors.length ==10)
        
        for(let index = 0; index <  results.Liquors.length; index++){
            console.log(index);
            const liquor : Liquor = results.Liquors[index];
            const liqDetails : LiquorDetails = liquor.details;
            const liqProd : LiquorProductor = liqDetails.productor;

            console.log(liquor);
            console.log(liqDetails);
            console.log(liqProd);

            if(index === 9){
                expect(liqProd.country).toEqual('Canada');
                expect(liqDetails.size).toEqual('750 ml');
                expect(liquor.price).toEqual(39.75);
            }

            if(index === 3){
                expect(liqProd.name).toEqual('White Oak Distillery');
                expect(liqDetails.bouchonType).toEqual('Métal vissé');
                expect(liquor.imageURL).toEqual('http://s7d9.scene7.com/is/image/SAQ/13738354_is');
            }
        }
        expect(condition).toEqual(true);
    });
})

