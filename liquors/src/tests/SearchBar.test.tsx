import React from 'react';
import {SearchBar} from '../application/components/search/SearchBar';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
    const wrapper = shallow(<SearchBar />);
    const searchButton = <h3>Search</h3>;
    // expect(wrapper.contains(welcome)).toBe(true);
    expect(wrapper.contains(searchButton)).toEqual(true);
});
