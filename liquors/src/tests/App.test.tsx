import React from 'react';
import App from '../application/pages/App';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Get your liquors</h2>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
