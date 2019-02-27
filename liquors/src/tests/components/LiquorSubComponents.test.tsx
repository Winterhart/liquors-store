import React from 'react';
import { shallow } from 'enzyme';
import { QueryResultMapper } from '../../domain/adapters/QueryResultMapper';
import { QueryResult } from '../../domain/model/QueryResult';
import {LiquorProductorSection} from '../../application/components/liquor/LiquorProductorSection'; 
import {LiquorDetailSection} from '../../application/components/liquor/LiquorDetailSection';
const rawJSON = require('../sample/sampleAPI.json');
describe('Liquor Component Testing', () => {
    const converter: QueryResultMapper = new QueryResultMapper();
    const results: QueryResult = converter.convertToDomainObj(rawJSON);

    it('Testing Liquor Productor', () => {

        const productorName : string = results.Liquors[1].details.productor.name;
        const props = {
            productor: results.Liquors[1].details.productor
        }
        const wrapper = shallow(<LiquorProductorSection {...props} />)
        const containsName : boolean = wrapper.contains(productorName);
        
        expect(containsName).toBe(true);
        
    });

    it('Testing Liquor Details', () => {

        const category: string = results.Liquors[1].details.category;
        const props = {
            details: results.Liquors[1].details,
            price: results.Liquors[1].price
        }
        const wrapper = shallow(<LiquorDetailSection {...props} />)
        const containsCategory: boolean = wrapper.contains(category);

        expect(containsCategory).toBe(true);

    });


})