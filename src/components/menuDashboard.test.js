import React from 'react';
import { mount } from 'enzyme';
import MenuDashboard from './menuDashboard.component';

describe('MenuDashboard', () => {
    const component = mount(<MenuDashboard/>);
    
  it('should match the snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });

  it('should show all days of week', () => {
    expect(component.find('DayCard').length).toEqual(7);
  });

  it('selected day should be rendered', () => {
    expect(component.find('div.dayText')).toHaveLength(1);
  });

  it('selected day food detail should be rendered', () => {
    expect(component.find('div.detailText')).toHaveLength(1);
  });

});