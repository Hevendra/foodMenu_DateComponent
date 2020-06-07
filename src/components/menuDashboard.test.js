import React from 'react';
import { shallow } from 'enzyme';
import MenuDashboard from './menuDashboard.component';

describe('MenuDashboard', () => {
    const component = shallow(<MenuDashboard/>);
    
  it('should match the snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });

  it('should have all days menu', () => {
    expect(component.find('DayCard').length).toEqual(7);
  });

});