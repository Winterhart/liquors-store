import React from 'react';
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
                results.Liquors.length == 44)

        expect(condition).toEqual(true);
    });
})

