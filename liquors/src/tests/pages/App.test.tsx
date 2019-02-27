import React from 'react';
import App from '../../application/pages/App';
import { shallow } from 'enzyme';
import logo from '../../assets/images/liquors-store.svg'


it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const welcome = <img src={logo} className="App-logo" alt="logo" />;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
