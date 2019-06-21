import React from 'react';
import { shallow } from 'enzyme';
import Designer from './index';

describe('Designer', () => {

	const wrapper = shallow(<Designer />);

	it('renders', () => {
		expect(wrapper.exists()).toBe(true);
	});

});
