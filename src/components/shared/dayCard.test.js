import React from 'react';
import { shallow } from 'enzyme';
import DayCard from './dayCard.component';

describe('MenuDashboard', () => {
    
    const sampleProps = {  
        key: 'Sunday',
        day: 'Sunday',
        date: '07 Jun',
        isToday: true,
        isSelected: true
    };

    const component = shallow(<DayCard {...sampleProps}/>);
    
  it('should match the snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });

  it('should render Today card', () => {
    expect(component.find('div.todayText')).toHaveLength(1);
  });
  
  it('date should be rendered', () => {
    expect(component.find('div.dateTxt')).toHaveLength(1);
  });

  it('day should be rendered', () => {
    expect(component.find('div.dayTxt')).toHaveLength(1);
  });

  it('day should be same as props day value', () => {
    expect(component.find('div.dayTxt').text()).toEqual('Sunday');
  });

  it('date should be same as props date value', () => {
    expect(component.find('div.dateTxt').text()).toEqual('07 Jun');
  });

});