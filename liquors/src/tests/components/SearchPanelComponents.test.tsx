import React from 'react';
import { shallow, mount } from 'enzyme';
import {SelectOption } from '../../application/components/common/SelectOption';
import { AdvanceSearch } from '../../application/components/search/AdvanceSearch';
import { SearchPanel } from '../../application/components/search/SearchPanel';


describe('Search Panel Component Testing', () => {

    it('Testing Select Box', () => {
        const valName: string = 'superOption';
        const props = {
            value: valName
        }
        const wrapper = shallow(<SelectOption {...props} />)
        const containsName: boolean = wrapper.contains(valName);
        expect(containsName).toBe(true);
    });

    it('Testing Search Panel Logic', ()=>{
        const fakeFunction : void = undefined;
        const props = {
            fakeCallBack : fakeFunction
        }
        const wrapper = shallow(<SearchPanel {...props} />)
        wrapper.find('.adv').simulate('click', {
            preventDefault : () =>{}
        });
        expect(wrapper.state('isAdvActive')).toBe(true);

    })

    it('Testing Advance Search Panel Logic', () => {
        const fakeFunction: void = undefined;
        const props = {
            fakeCallBack: fakeFunction
        }
        const wrapper = mount(<AdvanceSearch {...props} />)
        wrapper.find('.catSelect').find('option').at(1).simulate('change', {
            preventDefault: () => { }
        });
        expect(wrapper.state('categorie')).toBe('Wine');
    })

})