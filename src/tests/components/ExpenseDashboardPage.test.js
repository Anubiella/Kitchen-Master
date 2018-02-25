import React from 'react';
import {shallow} from 'enzyme';
import DashboardPage from '../../components/DashboardPage';

test('should display the filters list and the expense list', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
});